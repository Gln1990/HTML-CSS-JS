let input = document.getElementById('input')

const handleSearch = (e) => {
  let inputValue = e.target.value.toLowerCase();
  let array = document.getElementsByClassName('item')

  for (let i = 0; i < array.length; i++) {
    let image = array[i]
    let caption = image.getAttribute('data-caption').toLowerCase()
    let title = image.getAttribute('title').toLowerCase()
    caption.includes(inputValue) || title.includes(inputValue)? image.style.display = 'inline' : image.style.display = 'none'
  }
}
input.addEventListener('keyup', handleSearch)

baguetteBox.run('.gallery', {
    captions: true,
    buttons: 'auto',
    animation: 'fadeIn'
});