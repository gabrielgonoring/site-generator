// import fs from 'fs';

// // Caminho do arquivo HTML
// const filePath = 'C:\\Users\\gabriel.borges\\Downloads\\teste-front\\my-app\\src\\site\\index.html';

// // Ler o arquivo HTML
// fs.readFile(filePath, 'utf8', (err, data) => {
//   if (err) {
//     console.error('Erro ao ler o arquivo:', err);
//     return;
//   }

//   // Substituir {companyName} por "Empresa"
//   const updatedContent = data.replace('{companyName}', 'Empresa');

  

// });



    const data = [
    { companyInfoTitle: 'Informação 1', companyInfoDescription: 'Descrição 1' },
    { companyInfoTitle: 'Informação 2', companyInfoDescription: 'Descrição 2' },
    { companyInfoTitle: 'Informação 3', companyInfoDescription: 'Descrição 3' },
    { companyInfoTitle: 'Informação 4', companyInfoDescription: 'Descrição 4' }
  ];
  
  // Função para gerar HTML de cada objeto
  function generateHTML(items) {
    
    const tabsHtml = items.map((item, index) =>
        `<li class="nav-item" role="presentation"><a class="nav-link nav-link-big ${index ===0 ? 'active':''}" href="#tabs-6-${index+1}" data-toggle="tab">0${index+1}</a></li>`
    ).join('\n');
    
    const itemsHtml = items.map((item, index) => `
      <div class="tab-pane fade ${index===0?'show active':''}" id="tabs-6-${index+1}">
          <h5 class="font-weight-normal">${item.companyInfoTitle}</h5>
          <p>${item.companyInfoDescription}</p>
      </div>
    `).join('\n');

    const moreInfoComponentHtml = `
    <section class="section section-sm bg-default text-md-left">
        <div class="container">
          <div class="row row-50 align-items-center justify-content-center justify-content-xl-between">
            <div class="col-lg-6 col-xl-5 wow fadeInLeft">
              <h2>Get More With Us</h2>
              <!-- Bootstrap tabs-->
              <div class="tabs-custom tabs-horizontal tabs-line tabs-line-big text-center text-md-left" id="tabs-6">
                <!-- Nav tabs-->
                <ul class="nav nav-tabs">
                  ${tabsHtml}
                </ul>
                <!-- Tab panes-->
                <div class="tab-content">
                  ${itemsHtml}
                </div>
              </div>
            </div>
            <div class="col-lg-6 text-center wow fadeInUp" data-wow-delay=".1s">
              <div class="owl-carousel owl-style-1" data-items="2" data-stage-padding="0" data-loop="true" data-margin="0" data-mouse-drag="true" data-autoplay="true"><a class="box-device" href="#"><img src="images/index-4-313x580.png" alt="" width="313" height="580"/></a><a class="box-device" href="#"><img src="images/index-5-313x580.png" alt="" width="313" height="580"/></a><a class="box-device" href="#"><img src="images/index-4-313x580.png" alt="" width="313" height="580"/></a><a class="box-device" href="#"><img src="images/index-5-313x580.png" alt="" width="313" height="580"/></a></div>
            </div>
          </div>
        </div>
      </section>
    `;

    return moreInfoComponentHtml;
  }