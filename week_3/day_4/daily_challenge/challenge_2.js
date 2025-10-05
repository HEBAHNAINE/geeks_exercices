// récupère l'input 
const input = document.getElementById('letterInput');
input.addEventListener('keyup', function() {
  this.value = this.value.replace(/[^a-zA-Z]/g, '');
});
