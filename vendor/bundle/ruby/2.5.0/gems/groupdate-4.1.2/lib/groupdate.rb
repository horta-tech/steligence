require "active_support/core_ext/module/attribute_accessors"
require "active_support/time"
require "groupdate/version"
require "groupdate/relation_builder"
require "groupdate/series_builder"
require "groupdate/magic"

module Groupdate
  class Error < RuntimeError; end

  PERIODS = [:second, :minute, :hour, :day, :week, :month, :quarter, :year, :day_of_week, :hour_of_day, :minute_of_hour, :day_of_month, :month_of_year]
  METHODS = PERIODS.map { |v| :"group_by_#{v}" } + [:group_by_period]

  mattr_accessor :week_start, :day_start, :time_zone, :dates
  self.week_start = :sun
  self.day_start = 0
  self.dates = true

  # api for gems like ActiveMedian
  def self.process_result(relation, result, **options)
    if relation.groupdate_values
      result = Groupdate::Magic::Relation.process_result(relation, result, **options)
    end
    result
  end
end

require "groupdate/enumerable"

ActiveSupport.on_load(:active_record) do
  require "groupdate/active_record"
end
