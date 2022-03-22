const  masks = {

    contato (value) {
        return value
          .replace(/\D+/g, '') //replace com D minusculo é para nao permitir nao nomeros e o d é o contrário
          .replace(/(\d{2})(\d)/, '+$1 $2')
          .replace(/(\d{2})(\d)/, '($1) $2')
          .replace(/(\d{4})(\d)/, '$1-$2')
          .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
          .replace(/(-\d{4})\d+?$/, '$1')
          console.log(value)
      }
      
    

}

document.querySelectorAll('input').forEach($input => {
    const field = $input.dataset.js
  
    $input.addEventListener('input', e => {
      e.target.value = masks[field](e.target.value)
    }, false)
  })