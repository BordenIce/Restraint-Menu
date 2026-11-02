const sets = {
  Cake:      ['images/cake1.png', 'images/cake2.jpg', 'images/cake3.jpg', 'images/cake4.jpg', 'images/cake5.jpg', 'images/cake6.jpg'],
  Muffins:   ['images/muffin1.jpg', 'images/muffin2.jpg', 'images/muffin3.jpg', 'images/muffin4.jpg', 'images/muffin5.jpg', 'images/muffin6.jpg'],
  Croissant: ['images/croissant1.jpg', 'images/croissant2.jpg', 'images/croissant3.jpg', 'images/croissant4.jpg', 'images/croissant5.jpg', 'images/croissant6.jpg'],
  Bread:     ['images/bread1.jpg', 'images/bread2.jpg', 'images/bread3.jpg', 'images/bread4.jpg', 'images/bread5.jpg', 'images/bread6.jpg'],
  Tart:      ['images/tart1.jpg', 'images/tart2.jpg', 'images/tart3.jpg', 'images/tart4.jpg', 'images/tart5.jpg', 'images/tart6.jpg'],
  Favorite:  ['images/fav1.jpg', 'images/fav2.jpg', 'images/fav3.jpg', 'images/fav4.jpg', 'images/fav5.jpg', 'images/fav6.jpg']
};

const gal = document.getElementById('gal');

const draw = k => {
  gal.innerHTML = sets[k].map(src => `
    <div class="ph"><img src="${src}" alt="${k}"></div>
  `).join('');
};

draw('Cake');

document.querySelectorAll('#tabs button').forEach(b => b.onclick = () => {
  document.querySelectorAll('#tabs button').forEach(x => x.classList.remove('on'));
  b.classList.add('on');
  draw(b.textContent);
});