  let outEvent = document.getElementById('out-event');
  let fundacaoEvent = document.getElementById('fundacao-event');
  let pisoEvent = document.getElementById('piso-event');
  let estruturaEvent = document.getElementById('estrutura-event');
  let lajeEvent = document.getElementById('laje-event');
  let vedacaoEvent = document.getElementById('vedacao-event');
  let envelopeEvent = document.getElementById('envelope-event');

  //IMAGENS
  let fundacao = document.querySelector('.fundacao');
  let piso = document.querySelector('.piso');
  let estrutura = document.querySelector('.estrutura');
  let laje = document.querySelector('.laje');
  let vedacao = document.querySelector('.vedacao');
  let envelope = document.querySelector('.envelope');
  let hover = document.querySelector('.hover');

  // TEXTOS
  let catalogIntro = document.querySelector('.catalog-intro');
  let catalogFundacao = document.querySelector('.catalog-fundacao');
  let catalogPiso = document.querySelector('.catalog-piso');
  let catalogEstrutura = document.querySelector('.catalog-estrutura');
  let catalogLaje = document.querySelector('.catalog-laje');
  let catalogVedacao = document.querySelector('.catalog-vedacao');
  let catalogEnvelope = document.querySelector('.catalog-envelope');

  let allLayers = [fundacao, piso, estrutura, laje, vedacao, envelope, catalogIntro, catalogFundacao, catalogPiso, catalogEstrutura, catalogLaje, catalogVedacao, catalogEnvelope];

  // CLICK EVENTS

  outEvent.addEventListener('click', () => {
    removeLayers();
    catalogIntro.classList.toggle('show-layer');
  });

  fundacaoEvent.addEventListener('click', () => {
    removeLayers();
    fundacao.classList.toggle('show-layer');
    catalogFundacao.classList.toggle('show-layer');
  });

  pisoEvent.addEventListener('click', () => {
    removeLayers();
    piso.classList.toggle('show-layer');
    catalogPiso.classList.toggle('show-layer');
  });

  estruturaEvent.addEventListener('click', () => {
    removeLayers();
    estrutura.classList.toggle('show-layer');
    catalogEstrutura.classList.toggle('show-layer');
  });

  lajeEvent.addEventListener('click', () => {
    removeLayers();
    laje.classList.toggle('show-layer');
    catalogLaje.classList.toggle('show-layer');
  });

  vedacaoEvent.addEventListener('click', () => {
    removeLayers();
    vedacao.classList.toggle('show-layer');
    catalogVedacao.classList.toggle('show-layer');
  });

  envelopeEvent.addEventListener('click', () => {
    removeLayers();
    envelope.classList.toggle('show-layer');
    catalogEnvelope.classList.toggle('show-layer');
  });

  // HOVER EVENTS

  fundacaoEvent.addEventListener('mouseover', () => {
    hover.classList.toggle('fundacao')
    hover.classList.toggle('show-layer');
  });
  fundacaoEvent.addEventListener('mouseout', () => {
    hover.classList.toggle('show-layer');
    hover.classList.toggle('fundacao')
  });

  pisoEvent.addEventListener('mouseover', () => {
    hover.classList.toggle('piso')
    hover.classList.toggle('show-layer');
  });
  pisoEvent.addEventListener('mouseout', () => {
    hover.classList.toggle('piso')
    hover.classList.toggle('show-layer');
  });

  estruturaEvent.addEventListener('mouseover', () => {
    hover.classList.toggle('estrutura')
    hover.classList.toggle('show-layer');
  });
  estruturaEvent.addEventListener('mouseout', () => {
    hover.classList.toggle('estrutura')
    hover.classList.toggle('show-layer');
  });

  lajeEvent.addEventListener('mouseover', () => {
    hover.classList.toggle('laje')
    hover.classList.toggle('show-layer');
  });
  lajeEvent.addEventListener('mouseout', () => {
    hover.classList.toggle('laje')
    hover.classList.toggle('show-layer');
  });

  vedacaoEvent.addEventListener('mouseover', () => {
    hover.classList.toggle('vedacao')
    hover.classList.toggle('show-layer');
  });
  vedacaoEvent.addEventListener('mouseout', () => {
    hover.classList.toggle('vedacao')
    hover.classList.toggle('show-layer');
  });

  envelopeEvent.addEventListener('mouseover', () => {
    hover.classList.toggle('envelope')
    hover.classList.toggle('show-layer');
  });
  envelopeEvent.addEventListener('mouseout', () => {
    hover.classList.toggle('envelope')
    hover.classList.toggle('show-layer');
  });

  let removeLayers = () => {
    allLayers.forEach((layer) => {
      layer.classList.remove('show-layer');
    });
  };

