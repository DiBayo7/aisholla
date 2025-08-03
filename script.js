const el = {
  l: document.getElementById('l'),
  o: document.getElementById('o'),
  v: document.getElementById('v'),
  e: document.getElementById('e'),
};

const blop = new mojs.Burst({
  left: 0,
  top: 0,
  radius: { 0: 100 },
  count: 10,
  children: {
    shape: 'circle',
    radius: 20,
    fill: 'deeppink',
    strokeWidth: 5,
    duration: 700
  }
});

const crtLoveTL = () => {
  const move = 1000;

  return new mojs.Timeline().add([
    new mojs.Tween({
      duration: move,
      onUpdate: (progress) => {
        const opacity = 1 - progress;
        [el.l, el.o, el.v, el.e].forEach(span => {
          span.style.opacity = opacity;
        });
      },
      onComplete: () => {
        const rect = el.v.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        blop.tune({ x, y }).replay();
      }
    })
  ]);
};

window.addEventListener('load', () => {
  crtLoveTL().play();
});
