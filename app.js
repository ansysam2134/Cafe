const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(menuButton&&nav)menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.textContent=open?'×':'☰'});
function showToast(message){let toast=document.querySelector('.toast');if(!toast){toast=document.createElement('div');toast.className='toast';toast.setAttribute('role','status');document.body.appendChild(toast)}toast.textContent=message;toast.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>toast.classList.remove('show'),2800)}
document.querySelectorAll('[data-demo-form]').forEach(form=>form.addEventListener('submit',event=>{event.preventDefault();const message=form.dataset.success||'Prontinho! Informação salva nesta demonstração.';showToast(message);form.reset()}));
document.querySelectorAll('[data-reminder]').forEach(button=>button.addEventListener('click',()=>showToast('Lembrete ativado para este cuidado!')));
document.querySelectorAll('[data-contact]').forEach(button=>button.addEventListener('click',()=>showToast('Este contato é demonstrativo. Adicione os dados reais do estabelecimento.')));
const petForm=document.querySelector('#pet-form');
if(petForm)petForm.addEventListener('submit',event=>{event.preventDefault();const data=new FormData(petForm);const name=data.get('pet-name')||'Seu pet';const card=document.querySelector('#new-pet-result');if(card){card.innerHTML=`<div class="pet-summary"><div class="pet-avatar">${data.get('pet-kind')==='Gato'?'🐱':'🐶'}</div><div><h3>${escapeText(name)}</h3><p>Perfil criado nesta demonstração · ${escapeText(data.get('pet-kind')||'Pet')}</p></div></div>`;card.hidden=false}showToast(`${name} foi cadastrado com carinho!`);petForm.reset()});
function escapeText(value){const node=document.createElement('span');node.textContent=value;return node.innerHTML}
