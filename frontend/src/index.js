document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('button')
  const attachBtn = document.getElementById('attach-attachment')
  const parent_div = document.getElementById('attachment-bar')
  const car_container_div = document.querySelector('.car-container')

  fetch("http://localhost:3000/attachments")
  .then(resp => resp.json())
  .then(data => data.forEach(attachment =>{
    makeAttachmentCard(attachment)

  }))

  const makeAttachmentCard = (attachment)=>{
    const div = document.createElement('div')
    const h3 = document.createElement('h3')
    h3.className = "attachment-name"
    h3.innerText = attachment.name
    const img = document.createElement('img')
    img.className = "attachment-img"
    img.src = attachment.img_url
    div.append(h3,img)
    parent_div.append(div)
  }
  fetch("http://localhost:3000/cars")
  .then(resp => resp.json())
  .then(car_data => car_data.forEach(car=>{
    makeCarCard(car)
  }))
  const makeCarCard = (car) =>{
    
    const div_car = document.createElement('div')
    div_car.className = "car-card"
    div_car.setAttribute("data-car-id", car.id)
    const div = document.createElement('div')
    const h3_car_make = document.createElement('h3')
    const h3_car_model = document.createElement('h3')
    const h3_car_year = document.createElement('h3')
    const h3_car_weight = document.createElement('h3')

    h3_car_make.className = "car-make"
    h3_car_make.innerText = car.make
    h3_car_model.className = "car-model"
    h3_car_model.innerText = car.model
    h3_car_year.className = "car-year"
    h3_car_year.innerText = car.year
    h3_car_weight.className = "car-weight"
    h3_car_weight.innerText = car.weight
    fetch("http://localhost:3000/parts")
    .then(resp => resp.json())
    .then(parts_data => {
     const car_parts = parts_data.filter(x=>{
        return x.car_id == car.id
      })
    car_parts.forEach(part=>{
      makePartCard(part,part_container_div)
    })
    })
    const part_container_div = document.createElement('div')
    part_container_div.className = "part-container"
  
    div.append(h3_car_make,h3_car_model,h3_car_year,h3_car_weight)
    div_car.append(div,part_container_div)
    car_container_div.append(div_car)
    
  }
  const makePartCard = (part, part_container_div) =>{
    const div_part = document.createElement('div')
    div_part.className = "part-card"
    div_part.setAttribute("data-part-id", part.id)
    const div = document.createElement('div')
    const h3_part_name = document.createElement('h3')
    h3_part_name.innerText = part.name 
    div.append(h3_part_name)
    div_part.append(div)
    part_container_div.append(div_part)
  }
  button.addEventListener('click',()=>{
  
    fetch("http://localhost:3000/attachments",{
      method: "POST",
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        
      })
    })
    .then(resp=>{
      // debugger
      return resp.json()
    })
    .then(idk=>console.log(idk))
    // .catch(() => {console.error('what happened')})
  })
  

  attachBtn.addEventListener('click', () => {
    fetch('http://localhost:3000/part_attachment_joiners', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        part_id: 2,
        attachment_id: 2
      })
    })
    .then(r => r.json())
    .then(pa_joiner => {
      if (pa_joiner.id) {
        console.log(pa_joiner)
      } else {
        console.error('part or attachment already has a pair')
      }
    })
  })

  
})