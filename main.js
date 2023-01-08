// const fileInput = document.querySelector("input")
// const downloadBtn = document.querySelector("button")


// downloadBtn.addEventListener('click', (e) => {
//     e.preventDefault() //prevent from form sumbmitting (Page reload)
//     downloadBtn.innerText = "Downloading File..."
//     fectchFile(fileInput.value)
// })

// function fectchFile(url) {
//     //fetching file & and returning response to blob
//     fetch(url).then(res => res.blob()).then(file => {

//         let tempUrl = URL.createObjectURL(file)
//         let aTag = document.createElement('a')

//         aTag.href = tempUrl;

//         aTag.download = url.replace(/^.*[\\\/]/, '')
//         document.body.appendChild(aTag)
//         aTag.click()
//         aTag.remove()
//         URL.revokeObjectURL(tempUrl)
//         downloadBtn.innerText = "Downloaded File";
//     }).catch(() => {
//         downloadBtn.innerText = "Downloaded File";
//         console.log("Download Failed")
//     })
// }

const ques = document.getElementById('question')
const AnsInput = document.querySelector("input")
const Sumbit = document.getElementById('sumbit')
const Show = document.getElementById('show ans')
const drop = document.getElementById('drop')
const next = document.getElementById('next')
const ques1 = document.getElementById('question')
const AnsInput1 = document.querySelector("input")
const Sumbit1 = document.getElementById('sumbit')
const Show1 = document.getElementById('show ans')
const drop1 = document.getElementById('drop')



function Call(ques1,AnsInput1,Sumbit1,drop){
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1c77c941a7msh00bec8eebf1874dp132f41jsn1cd150214d8e',
		'X-RapidAPI-Host': 'trivia-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://trivia-by-api-ninjas.p.rapidapi.com/v1/trivia', options)
	.then(response => response.json())
	.then((response)=>{
    
    ques1.innerHTML=response[0].question
    let Ans = response[0].answer
    
    
    Sumbit.addEventListener('click', (e)=>{
        e.preventDefault();
        let val1 = AnsInput1.value;
       
        if(val1==Ans)
        {
            // const div=document.createElement('div')
            const div = document.getElementById('divM')
            
            div.innerHTML=`<div class="alert alert-success d-flex align-items-center" id="hid"  role="alert">
              Correct Answer
              </div> 
          </div>`
          Sumbit1.before(div)
          setTimeout( ()=>{
            const hid = document.getElementById('hid')
            hid.remove()
          },800)
          
        }
        else{
          const div = document.getElementById('divM')
            div.innerHTML=`<div class="alert alert-danger d-flex align-items-center" id="hid1" role="alert">
              Incorrect Answer
            </div>
          </div>`
          Sumbit1.before(div)
          setTimeout( ()=>{
            const hid1 = document.getElementById('hid1')
            try{
            hid1.remove()
            }
            catch(err){
              console.log(val1)
            }
          },800)
          
          
        }
    })
    drop.innerHTML=`${Ans}`
})
}

next.addEventListener('click' , (e)=>{
  e.preventDefault()
  AnsInput.value=null
  Call(ques1,AnsInput1,Sumbit1,drop1)
})

let count=0;
function CallOnce(ques,AnsInput,Sumbit,drop){
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1c77c941a7msh00bec8eebf1874dp132f41jsn1cd150214d8e',
		'X-RapidAPI-Host': 'trivia-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://trivia-by-api-ninjas.p.rapidapi.com/v1/trivia', options)
	.then(response => response.json())
	.then((response)=>{
    
    ques.innerHTML=response[0].question
    let Ans = response[0].answer
    
    
    Sumbit.addEventListener('click', (e)=>{
        e.preventDefault();
        const val = AnsInput.value;
        if(val==Ans)
        {
          const div = document.getElementById('divM')
         
          div.innerHTML=`<div class="alert alert-success d-flex align-items-center" id="hi"  role="alert">
            Correct Answer
            </div> 
        </div>`
        Sumbit1.before(div)
        setTimeout( ()=>{
          const hi = document.getElementById('hi')
          hi.remove()
        },800)
         
        }
        else{
          const div = document.getElementById('divM')
            div.innerHTML=`<div class="alert alert-danger d-flex align-items-center" id="hi1" role="alert">
              Incorrect Answer
            </div>
          </div>`
          Sumbit.before(div)
          setTimeout( ()=>{
            const hi1 = document.getElementById('hi1')
            try{
            if(hi1.hasAttribute('alert')){
            hi1.remove()
            }
          }
          catch(err){
            console.log(val)
          }
            
          },800)
          
          
        }
    })
    drop.innerHTML=`${Ans}`
})
count++;

}

if(count==0)
{
  CallOnce(ques,AnsInput,Sumbit,drop)
}
