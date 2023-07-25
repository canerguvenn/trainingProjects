const range = document.getElementById('range')

range.addEventListener('input', (e) => {
    const value= +e.target.value
    const label= e.target.nextElementSibling
    label.innerHTML= value

    const range_Witdh = getComputedStyle(e.target).getPropertyValue('width')
    const label_Width = getComputedStyle(label).getPropertyValue('width')

    const num_Width= +range_Witdh.substring(0,range_Witdh.length -2)
    const num_label_Width= +label_Width.substring(0,label_Width.length -2)


    const max= e.target.max
    const min= e.target.min

    const left= value * (num_Width / max) - num_label_Width / 2 +scale(value,min , max, 10, -10)

    label.style.left = `${left}px`
    
    label.innerHTML= value

})

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }