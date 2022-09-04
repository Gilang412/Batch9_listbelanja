let modal = document.getElementById('modal');
let floating_button = document.getElementById('floating_button');
let modal_bg = document.getElementById('modal_bg');
let addlist_form = document.getElementById('addlist_form');
let root = document.getElementById('root');
let subtitle = document.getElementById('subtitle');

subtitle.innerHTML = new Date().toLocaleDateString();

let data_list_belanja = [];

floating_button.addEventListener('click', () => {
  if (modal.style.display == 'none') {
    showModal();
    return;
  }

  hideModal();
});

modal_bg.addEventListener('click', () => {
  modal.style.display = 'none';
  floating_button.style.backgroundColor = 'black';
  floating_button.style.transform = 'rotate(0deg)';
});

addlist_form.addEventListener('submit', (event) => {
  event.preventDefault();

  let barang = event.target.barang.value;
  let harga = event.target.harga.value;

  data_list_belanja.push({
    nama_barang: barang,
    harga_barang: harga,
    tanggal: new Date().toLocaleDateString(),
  });
  console.info(data_list_belanja);

  event.target.barang.value = '';
  event.target.harga.value = '';
  hideModal();
  renderToHtml();
});

function showModal() {
  modal.style.display = 'flex';
  floating_button.style.backgroundColor = 'gray';
  floating_button.style.transform = 'rotate(45deg)';
}

function hideModal() {
  modal.style.display = 'none';
  floating_button.style.backgroundColor = 'black';
  floating_button.style.transform = 'rotate(0deg)';
}

function renderToHtml() {
  root.innerHTML = '';

  data_list_belanja.forEach((e, i) => {
    root.innerHTML += `
    
    <div class="card">
    <small> ${e.tanggal} </small>
      <div>
    ${e.nama_barang} <span> Rp.${e.harga_barang} </span>
      </div>
      <button onclick="handleDelete(${i})">selesai</button>
    </div> 
    `;
  });
}

function handleDelete(index) {
  data_list_belanja.splice(index, 1);

  renderToHtml();
}
