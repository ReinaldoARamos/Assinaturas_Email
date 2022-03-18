class Usuario {
  constructor(name, number, job, adress, CEP, id, network) {
    this._name = name;
    this._number = number;
    this._job = job;
    this._adress = adress;
    this._CEP = CEP;
    this._id = id;
    this._net = network
  }
}

console.log(Usuario);

let copiarTextoGrupo = () => {

 

  let CampoMatricula = document.getElementById("matricula");
  let CampoNome = document.getElementById("nomeU");
  let CampoCargo = document.getElementById("cargo");
  let CampoNumero = document.getElementById("contato");
  let CampoEnredeco = document.getElementById("endereco");
  let CampoCEP = document.getElementById("CEP");
  let CampoEmpresa = document.getElementById("GroupSelect");
 
  function Delete() {
    CampoNome.value = ""
      CampoCargo.value= ""
      CampoCargo.value = ""
      CampoNome.value = ""
      CampoNumero.value = "" 
      CampoEnredeco.value = ""
      CampoMatricula.value =  ""
      CampoCEP.value = ""
      CampoEmpresa.value = "Void"
   }

  if (
    CampoNome.value == "" ||
    CampoCargo.value == "" ||
    CampoCargo.value == "" ||
    CampoNome.value == "" ||
    CampoNumero.value == "" ||
    CampoEnredeco == "" ||
    CampoMatricula == "" ||
    CampoCEP == "" || 
    CampoEmpresa.value == "Void"
  ) {
    alert("Preencha os campos corretamente");
  } else {
    Gerar(
      CampoNome.value,
      CampoNumero.value,
      CampoCargo.value,
      CampoEnredeco.value,
      CampoMatricula.value,
      CampoCEP.value,
      CampoEmpresa.value
    );
    Delete();
  };
};

function Gerar(nome, contato, cargo, endereco, matricula, CEP, empresa) {
  let usuario = new Usuario(nome, contato, cargo, endereco, matricula, CEP, empresa);
  console.log(usuario);


    var texto;
    switch (empresa) {
      case "Grupo1":
        var texto = `
      <div style="height: 300px; width:100%;">
      <div> 
        <p style="float: left;" >
          <img src="http://grupomundialmix.com.br/assinaturaImagens/Logos.png" height="150px" width="230px">
        </p>
      </div>
      <div style="height: 180px; border-right: 1px solid black; float: left;" >
      </div> 
      <div style="float: left;  padding-left: 10px;" > 
          <p style="font-size: 25px;font-weight: bold; margin: 0;color: black;"> ${nome} </p>
          <p style="font-size: 20px;font-weight: bold; margin: 0;color: black;"> ${cargo} </p>
          </br> 
          <p style="font-size: 25px;font-weight: bold; margin: 0;color: grey;">+55 ${contato}</p>
          <p style="font-size: 16px; margin: 0;color: grey;">${endereco}</p> 
          <p style="font-size: 16px; margin: 0;color: grey;">${CEP}</p> 
          </br> 
          <a href="https://www.facebook.com/superimperatriz/"><img src="http://grupomundialmix.com.br/assinaturaImagens/lface.png" alt="facebook" style="width:30px;height:30px;"></a>
          <a href="https://www.instagram.com/super_imperatriz/"><img src="http://grupomundialmix.com.br/assinaturaImagens/linsta.png" alt="instagram" style="width:30px;height:30px;"></a>
          <a href="https://api.whatsapp.com/send?phone=554832794352"><img src="http://grupomundialmix.com.br/assinaturaImagens/lwhats.png" alt="whatsapp" style="width:30px;height:30px;"></a>
              
      </div>
      <div style="float: left; align-items: center; width: 250px;" >
        <img src="http://chart.apis.google.com/chart?cht=qr&chl=BEGIN:VCARD%0AVERSION:2.1%0AN:Alexandre%20Angelo%20Lischka%0AORG:Grupo MUNDIALMIX%0AEMAIL:gerente.ti@grupomundialmix.com.br%0ATEL:+554832794352%0AEND:VCARD&chs=200x200">
      
      </div> 
      <div style="float: left; font-size: 10px; padding-left:25px;font-style: italic;">
      <p>Prezado(a), o Grupo Mundial Mix valoriza a privacidade e proteção dos seus dados pessoais, 
        em conformidade com a Lei Geral de Proteção de Dados Pessoais(13.709/18), os dados deste e-mail ficarão mantidos em nossos bancos de dados
        pelo período de 5 anos, para eventuais consultas e não serão compartilhados com terceiros, sendo após este período devidamente descartado, salvo cumprimento de obrigação legal.</p>
      
        <p>Esta mensagem pode conter informações confidenciais e/ou privilegiadas. Se você não for o destinatário ou a pessoa autorizada a 
          receber esta mensagem, não deve usar, copiar ou divulgar informações nela contidas ou tomar qualquer ação baseada nessas informações.
        Se você recebeu esta mensagem por engano, por favor nos comunique imediatamente, respondendo a mensagem e excluindo-a do seu computador.
       </p>
      
       <p>
         Em caso de duvida ou exclusão  quanto aos seus dados entre em contato com nosso encarregado de dados pelo email dpo@grupomundialmix.com.br
       </p>
      </div>
      </div>
      `
     
      ;
        break;
  
      case "Grupo2":
        var texto = `
     
  <div style="height: 300px; width:100%;">
  <div> 
    <p style="float: left;" >
      <img src="http://grupomundialmix.com.br/assinaturaImagens/MundialMix.png" height="150px" width="230px">
    </p>
  </div>
  <div style="height: 180px; border-right: 1px solid black; float: left;" >
  </div> 
  <div style="float: left;  padding-left: 10px;" > 
  <p style="font-size: 25px;font-weight: bold; margin: 0;color: black;"> ${nome} </p>
  <p style="font-size: 20px;font-weight: bold; margin: 0;color: black;"> ${cargo} </p>
  </br> 
  <p style="font-size: 25px;font-weight: bold; margin: 0;color: grey;">+55 ${contato}</p>
  <p style="font-size: 16px; margin: 0;color: grey;">${endereco}</p> 
  <p style="font-size: 16px; margin: 0;color: grey;">${CEP}</p> 
      </br> 
      <a href="https://www.facebook.com/superimperatriz/"><img src="http://grupomundialmix.com.br/assinaturaImagens/lface.png" alt="facebook" style="width:30px;height:30px;"></a>
      <a href="https://www.instagram.com/super_imperatriz/"><img src="http://grupomundialmix.com.br/assinaturaImagens/linsta.png" alt="instagram" style="width:30px;height:30px;"></a>
      <a href="https://api.whatsapp.com/send?phone=554832794352"><img src="http://grupomundialmix.com.br/assinaturaImagens/lwhats.png" alt="whatsapp" style="width:30px;height:30px;"></a>
          
  </div>
  <div style="float: left; align-items: center; width: 250px;" >
    <img src="http://chart.apis.google.com/chart?cht=qr&chl=BEGIN:VCARD%0AVERSION:2.1%0AN:Alexandre%20Angelo%20Lischka%0AORG:Grupo MUNDIALMIX%0AEMAIL:gerente.ti@grupomundialmix.com.br%0ATEL:+554832794352%0AEND:VCARD&chs=200x200">
  </div> 
  <div style="float: left; font-size: 10px; padding-left:25px;font-style: italic;">
  <p>Prezado(a), o Grupo Mundial Mix valoriza a privacidade e proteção dos seus dados pessoais, 
    em conformidade com a Lei Geral de Proteção de Dados Pessoais(13.709/18), os dados deste e-mail ficarão mantidos em nossos bancos de dados
    pelo período de 5 anos, para eventuais consultas e não serão compartilhados com terceiros, sendo após este período devidamente descartado, salvo cumprimento de obrigação legal.</p>
    <p>Esta mensagem pode conter informações confidenciais e/ou privilegiadas. Se você não for o destinatário ou a pessoa autorizada a 
      receber esta mensagem, não deve usar, copiar ou divulgar informações nela contidas ou tomar qualquer ação baseada nessas informações.
    Se você recebeu esta mensagem por engano, por favor nos comunique imediatamente, respondendo a mensagem e excluindo-a do seu computador.
   </p>
   <p>
     Em caso de duvida ou exclusão  quanto aos seus dados entre em contato com nosso encarregado de dados pelo email dpo@grupomundialmix.com.br
   </p>
  </div>
  </div>
      `;
        break;
  
      case "Grupo3":
        var texto = `
        <div style="height: 300px; width:100%;">
        <div> 
          <p style="float: left;" >
            <img src="http://grupomundialmix.com.br/assinaturaImagens/Mundial%20%20%20e%20Brasil.png" height="150px" width="230px">
          </p>
        </div>
        <div style="height: 180px; border-right: 1px solid black; float: left;" >
        </div> 
        <div style="float: left;  padding-left: 10px;" > 
        <p style="font-size: 25px;font-weight: bold; margin: 0;color: black;"> ${nome} </p>
        <p style="font-size: 20px;font-weight: bold; margin: 0;color: black;"> ${cargo} </p>
        </br> 
        <p style="font-size: 25px;font-weight: bold; margin: 0;color: grey;">+55 ${contato}</p>
        <p style="font-size: 16px; margin: 0;color: grey;">${endereco}</p> 
        <p style="font-size: 16px; margin: 0;color: grey;">${CEP}</p> 
            </br> 
            <a href="https://www.facebook.com/superimperatriz/"><img src="http://grupomundialmix.com.br/assinaturaImagens/lface.png" alt="facebook" style="width:30px;height:30px;"></a>
            <a href="https://www.instagram.com/super_imperatriz/"><img src="http://grupomundialmix.com.br/assinaturaImagens/linsta.png" alt="instagram" style="width:30px;height:30px;"></a>
            <a href="https://api.whatsapp.com/send?phone=554832794352"><img src="http://grupomundialmix.com.br/assinaturaImagens/lwhats.png" alt="whatsapp" style="width:30px;height:30px;"></a>
                
        </div>
        <div style="float: left; align-items: center; width: 250px;" >
          <img src="http://chart.apis.google.com/chart?cht=qr&chl=BEGIN:VCARD%0AVERSION:2.1%0AN:Alexandre%20Angelo%20Lischka%0AORG:Grupo MUNDIALMIX%0AEMAIL:gerente.ti@grupomundialmix.com.br%0ATEL:+554832794352%0AEND:VCARD&chs=200x200">
        
        </div> 
        <div style="float: left; font-size: 10px; padding-left:25px;font-style: italic;">
        <p>Prezado(a), o Grupo Mundial Mix valoriza a privacidade e proteção dos seus dados pessoais, 
          em conformidade com a Lei Geral de Proteção de Dados Pessoais(13.709/18), os dados deste e-mail ficarão mantidos em nossos bancos de dados
          pelo período de 5 anos, para eventuais consultas e não serão compartilhados com terceiros, sendo após este período devidamente descartado, salvo cumprimento de obrigação legal.</p>
        
          <p>Esta mensagem pode conter informações confidenciais e/ou privilegiadas. Se você não for o destinatário ou a pessoa autorizada a 
            receber esta mensagem, não deve usar, copiar ou divulgar informações nela contidas ou tomar qualquer ação baseada nessas informações.
          Se você recebeu esta mensagem por engano, por favor nos comunique imediatamente, respondendo a mensagem e excluindo-a do seu computador.
         </p>
        
         <p>
           Em caso de duvida ou exclusão  quanto aos seus dados entre em contato com nosso encarregado de dados pelo email dpo@grupomundialmix.com.br
         </p>
        </div>
        </div>
        `;
        
    }
   

  

 

  //Cria um elemento input (pode ser um textarea)
  let inputTest = document.createElement("input");
  inputTest.value = texto;

  //Anexa o elemento ao body
  document.body.appendChild(inputTest);

  //seleciona todo o texto do elemento
  inputTest.select();
  //executa o comando copy
  //aqui é feito o ato de copiar para a area de trabalho com base na seleção
  document.execCommand("copy");

  console.log(texto);
  //remove o elemento
  document.body.removeChild(inputTest);

  alert("Assinatura gerada");
      
}


/*

*/