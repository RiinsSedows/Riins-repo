// JavaScript Document
$(document).ready(function(e) {
	
	getBroadcast();
	
    carousellive();
    carouselslot();
    carouselsport();
    carouseltembak();
    hidetoggle();

  //getLoginForm();
  getOther();
	
	setInterval(function () {
	   getStatusMaintenance();
    },10000);
	
	showSlide();
	slider();
	getTimeNow();
	
	if ($(window).width() > 800) {
   	 $("#promo").modal();
	}
	
	$(window).resize(function() {
        var bw = $(this).width();
        $(".fadein").height(bw*380/1900);
    }).resize();
});


function getLoginForm()
{
	$.ajax({url: "webdata.php?content=mobilelogin", success: function(result){
			$('#mobilelogin').html(result);	
	}});
	$.ajax({url: "webdata.php?content=desktoplogin", success: function(result){
			$('#desktoplogin').html(result);	
	}});
}

function getOther()
{
	$.ajax({url: "webdata.php?content=mobileapp", success: function(result){
			$('#mobileapp').html(result);	
			$('[data-toggle="tooltip"]').tooltip();
	}});
	$.ajax({url: "webdata.php?content=desktopapp", success: function(result){
			$('#desktopapp').html(result);	
			$('[data-toggle="tooltip"]').tooltip();
	}});
}

// mimpi

function getMimpi()
{
	var dimensi = $('.dimensi').val();
	var searchs = $('.search').val();
	
	//if (dimensi == "") dimensi = "2D";
	
	$('#mimpi_content').html("<img src=\"images/loading.gif\" width=\"16\">");
	$.ajax({url: "webdata.php?task=mimpi&dimensi="+dimensi+"&search="+searchs, success: function(result){
		$('#mimpi_content').html(result);
		$('#mimpi_content').fadeIn(500);
		hideSlide();
	}});
}

// slider

function slider()
{
	$('.fadein img:gt(0)').hide();
	setInterval(function(){
  	$('.fadein :first-child').fadeOut()
	 .next('img').fadeIn()
	 .end().appendTo('.fadein');}, 3000);
}

function showSlide() {
	$('.fadein').show();
	//$('#boxContent').hide();
}

function hideSlide() {
	$('.fadein').hide();
	$('#sosmed').hide();
	$('#desktop #msgbox').hide();
	$('#boxContent').css("padding-bottom","30px");
	$('#boxContent').show();
	$('#desktop .body').addClass("newbg");
}
//

$(document).on("click", ".btn-menu", function()
{
	$(".btn-menu").removeClass("selected");
	$(this).addClass("selected");
});

$(document).on("keyup", "#desktopregister #reg_rek, #desktopregister #reg_telpon", function()
		{	
			var rek = $(this).val();
			rek = onlyNumber(rek);
			if (isNaN(rek)) rek = '';
			$(this).val(rek);		
		});
		
//
$(document).on("change", '#desktopregister #reg_dari', function()
	{
		inputdari = $('#desktopregister #reg_dari').val();
		
		if (inputdari == 'Lain-lain') 
		{
			$('#desktopregister #input-lain').show();
		}
		else
		{
			$('#desktopregister #input-lain').hide();
		}
	});
		
function onlyNumber(n) {
	return n.replace(/\D/g, '');	
}

function getTimeNow() {
	$.ajax({url: "webdata.php?status=time", success: function(result){
		var listHari = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"]
		var listBulan = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
		
		setInterval(function () {
			result++;
			var t = new Date(result * 1000);
			var hari = listHari[t.getDay()];
			var n = t.getFullYear();
			var tgl = t.getDate()+'/'+listBulan[t.getMonth()]+'/'+t.getFullYear();
			var jam = t.getHours(); if (jam < 10) jam = '0'+jam;
			var menit = t.getMinutes(); if (menit < 10) menit = '0'+menit;
			var detik = t.getSeconds(); if (detik < 10) detik = '0'+detik;
			var jamk = jam+':'+menit+':'+detik;
			
	   		$('#timenow').html(hari+' '+tgl+' '+jamk+' ');
    	},1000);
		
	}});
}

//
var myTO;

function hideBox() {
  myTO = setTimeout(function(){ $(".boxprod").fadeOut(500); }, 1000);
}

function noHideBox() {
  clearTimeout(myTO);
}

$(".prod").hover(function(){
	var prod = $(this).attr('prod');
	
	$(".boxprod").fadeIn(500)
	$(".prodimg").hide();
	$("#"+prod).show();
	
	noHideBox();
	
	}, function(){
	hideBox();
});

$(".boxprod").hover(function(){
	$(".boxprod").show();
	noHideBox();
	}, function(){
	$(".boxprod").fadeOut(500);
});

$(document).on("click", "#desktoplogin .submit", function()
{	
	var r = Math.floor(Math.random() * 10000);
	var ver = '<img src="capimg.php?'+r+'" width="40" height="30" style="border:1px #999 solid;">';
	$('#desktoplogin #msgbox').removeClass().text('Validating').fadeIn(1000);
	
	$.post("webdata.php", $('#desktoplogin .form').serialize(),
		function(data)
		{
			  if (data == 'success')
			  {  
				$('#desktoplogin #msgbox').removeClass().text('Logging in').fadeTo(900,1,
				  function()
				  { 
						var result           = '';
						var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
						var charactersLength = characters.length;
						for ( var i = 0; i < 16; i++ ) {
						result += characters.charAt(Math.floor(Math.random() * charactersLength));
						}
						window.location='userarea.php?login='+result;
				  });
			  }
			  else
			  if (data == 'wrong')
			  {
				  $('#desktoplogin #msgbox').removeClass().text('Salah Password').fadeIn(1000);
				  $('#desktoplogin #verifikasi').html(ver);
			  }
			  else
			  if (data == 'banned')
			  {
				  $('#desktoplogin #msgbox').removeClass().text('User di Banned').fadeIn(1000);
				  $('#desktoplogin #verifikasi').html(ver);
			  }
			  else
			  if (data == 'empty')
			  {
				  $('#desktoplogin #msgbox').removeClass().text('Silakan diisi').fadeIn(1000);
			  }
			  else
			  if (data == 'capempty')
			  {
				  $('#desktoplogin #msgbox').removeClass().text('Verifikasi Kosong').fadeIn(1000);
				  $('#desktoplogin #verifikasi').html(ver);
			  }
			  else
			  if (data == 'caperror')
			  {
				  $('#desktoplogin #msgbox').removeClass().text('Verifikasi Salah').fadeIn(1000);
				  $('#desktoplogin #verifikasi').html(ver);
			  }
			  else
			  if (data == 'cap')
			  {
				  $('#desktoplogin #msgbox').removeClass().text('Isi Verifikasi').fadeIn(1000);
				  $('#desktoplogin #verifikasi').html(ver);
				  $('#desktoplogin .verifikasiform').show();
				  $('#desktoplogin .verifval').val('1');
			  }
			  else
			  if (data == 'reload')
			  {
				  window.location='index.php';
			  }
		});
	return false; 
});

function resetClassReg()
{
	$('#desktopregister #input-username').removeClass().addClass('form-group-sm');
	$('#desktopregister #input-pass').removeClass().addClass('form-group-sm col-md-3');
	$('#desktopregister #input-passcon').removeClass().addClass('form-group-sm col-md-3');
	$('#desktopregister #input-bank').removeClass().addClass('form-group-sm col-md-3');
	$('#desktopregister #input-rek').removeClass().addClass('form-group-sm col-md-3');
	$('#desktopregister #input-nama').removeClass().addClass('form-group-sm col-md-3');
	$('#desktopregister #input-reg').removeClass().addClass('form-group-sm col-md-3');
	$('#desktopregister #input-email').removeClass().addClass('form-group-sm col-md-3');
	$('#desktopregister #input-telpon').removeClass().addClass('form-group-sm col-md-3');
	$('#desktopregister #input-dari').removeClass().addClass('form-group-sm col-md-3');
	$('#desktopregister #input-lain').removeClass().addClass('form-group-sm col-md-3');
	$('#desktopregister #input-verifikasi').removeClass().addClass('form-group-sm col-md-3');
}

$(document).on("click", "#desktopregister #buttonRegister", function()
	{
	var ver = "<img src=\"capreg.php\" width=\"100%\" height=\"30\" style=\"border:1px #999 solid;\">";
	$('#statusRegister').removeClass().addClass('alert alert-sm alert-success').text('Validating').fadeIn(1000);
	
	$.post("webdata.php", $('#desktopregister #formRegister').serialize(),
		function(data)
		{
			  resetClassReg();

			  if (data == 'success')
			  {  
				$('#statusRegister').removeClass().addClass('alert alert-sm alert-success').text('Registrasi Sukses!, Selamat Bergabung, silakan isi data login Anda di form Login').fadeIn(900);
				
				$('#desktopregister #reg_passcon').val('');
				$('#desktopregister #reg_rek').val('');
				$('#desktopregister #reg_nama').val('');
				$('#desktopregister #reg_bank').val('');
				$('#desktopregister #reg_email').val('');
				$('#desktopregister #reg_telpon').val('');
				$('#desktopregister #reg_ref').val('');
				$('#desktopregister #reg_lain').val('');
				$('#desktopregister #reg_dari').val('');
				$('#desktopregister #reg_verifikasi').val('');
				
				$('#desktoplogin .username').val($('#desktopregister #reg_username').val());
				$('#desktopregister #reg_username').val('');
				$('#desktoplogin .password').val($('#desktopregister #reg_pass').val());
				$('#desktopregister #reg_pass').val('');
				$('#desktopregister #verform').focus();
			  }
			  else
			  if (data == 'userWrong')
			  {
				  $('#desktopregister #statusRegister').removeClass().addClass('alert alert-sm alert-warning').text('Username 6-16 karakter standar (A~Z, a~z, 0~9) dan tanpa spasi!').fadeIn(1000);
				  $('#desktopregister #input-username').addClass('has-error');
				  
			  }
			  else
			  if (data == 'passWrong')
			  {
				  $('#desktopregister #statusRegister').removeClass().addClass('alert alert-sm alert-warning').text('Password harus 6 karakter atau lebih').fadeIn(1000);
				  $('#desktopregister #input-pass').addClass('has-error');
			  }
			  else
			  if (data == 'passSame')
			  {
				  $('#desktopregister #statusRegister').removeClass().addClass('alert alert-sm alert-warning').text('Password harus sama dengan konfirmasi').fadeIn(1000);
				  $('#desktopregister #input-passcon').addClass('has-error');
			  }
			  else
			  if (data == 'bankEmpty')
			  {
				  $('#desktopregister #statusRegister').removeClass().addClass('alert alert-sm alert-warning').text('Bank harus diisi').fadeIn(1000);
				  $('#desktopregister #input-bank').addClass('has-error');
			  }
			  else
			  if (data == 'rekEmpty')
			  {
				  $('#desktopregister #statusRegister').removeClass().addClass('alert alert-sm alert-warning').text('Nomor Rekening harus diisi dengan angka saja').fadeIn(1000);
				  $('#desktopregister #input-rek').addClass('has-error');
			  }
			  else
			  if (data == 'namaEmpty')
			  {
				  $('#desktopregister #statusRegister').removeClass().addClass('alert alert-sm alert-warning').text('Nama sesuai rekening harus diisi').fadeIn(1000);
				  $('#desktopregister #input-nama').addClass('has-error');
			  }
			  else
			  if (data == 'dbError')
			  {
				  $('#desktopregister #statusRegister').removeClass().addClass('alert alert-sm alert-warning').text('Maaf ada masalah dengan registrasi').fadeIn(1000);
			  }
			  else
			  if (data == 'userExist')
			  {
				  $('#desktopregister #statusRegister').removeClass().addClass('alert alert-sm alert-warning').text('Maaf username tersebut sudah ada').fadeIn(1000);
				  $('#desktopregister #input-username').addClass('has-error');
			  }
			  else
			  if (data == 'rekExist')
			  {
				  $('#desktopregister #statusRegister').removeClass().addClass('alert alert-sm alert-warning').text('Maaf no rekening tersebut sudah ada').fadeIn(1000);
				  $('#desktopregister #input-rek').addClass('has-error');
			  }
			  else
			  if (data == 'refError')
			  {
				  $('#desktopregister #statusRegister').removeClass().addClass('alert alert-sm alert-warning').text('Maaf tidak ada referal tersebut, bila tidak punya referal, bisa kosongkan').fadeIn(1000);
				  $('#desktopregister #input-ref').addClass('has-error'); $('#desktopregister #reg_ref').removeAttr('readonly').val('');
			  }
			  else
			  if (data == 'emailError')
			  {
				  $('#desktopregister #statusRegister').removeClass().addClass('alert alert-sm alert-warning').text('Maaf email tidak valid').fadeIn(1000);
				  $('#desktopregister #input-email').addClass('has-error');
			  }
			  else
			  if (data == 'telponEmpty')
			  {
				  $('#desktopregister #statusRegister').removeClass().addClass('alert alert-sm alert-warning').text('Maaf Telpon tidak boleh kosong').fadeIn(1000);
				  $('#desktopregister #input-telpon').addClass('has-error');
			  }
			  else
			  if (data == 'dariEmpty')
			  {
				  $('#desktopregister #statusRegister').removeClass().addClass('alert alert-sm alert-warning').text('Maaf silakan dipilih dari mana anda tahu website kami').fadeIn(1000);
				  $('#desktopregister #input-dari').addClass('has-error');
			  }
			  else
			  if (data == 'lainEmpty')
			  {
				  $('#desktopregister #statusRegister').removeClass().addClass('alert alert-sm alert-warning').text('Maaf mohon diisi kolom lain-lain').fadeIn(1000);
				  $('#desktopregister #input-lain').addClass('has-error');
			  }
			  else
			  if (data == 'caperror')
			  {
				  $('#desktopregister #statusRegister').removeClass().addClass('alert alert-sm alert-warning').text('Maaf Verifikasi Salah').fadeIn(1000);
				  $('#desktopregister #input-verifikasi').addClass('has-error');
				  $('#desktopregister #capverifikasi').html(ver);
			  }
		});
	return false; 
});

function login()
{
	$('#desktoplogin .username').focus();	
}

function register()
{

	$('#desktop #content').html("<img src=\"images/loading.gif\" width=\"50\">");
	$.ajax({url: "webdata.php?content=register", success: function(result){
		$('#desktop #content').html(result);
		$('#desktop #content').fadeIn(500);
		hideSlide();
	}});
}

function getStatusMaintenance()
{
	$.ajax({url: "webdata.php?status=maintenance", success: function(result){
		if (result == '1') 
		{
			alert('Website is under Maintenance')
			window.location.replace("maintenance.php");
		}
	}});
}

function pagepromo()
{
	$('#desktop #content').html("<img src=\"images/loading.gif\" width=\"50\">");
	$.ajax({url: "webdata.php?content=cms&page=promo", success: function(result){
		$('#desktop #content').html(result);
		$('#desktop #content').fadeIn(500);
		hideSlide();
	}});
}

function page(i)
{
	$('#content2').html("<img src=\"images/loading.gif\" width=\"50\">");
	$.ajax({url: "webdata.php?content=cms&page="+i, success: function(result){
		$('#content2').html(result);
		$('#content2').fadeIn(500);
	}});
}

function resultData(id,i)
{
	hideSlide();
	$('#desktop #content').html("<img src=\"images/loading.gif\" width=\"50\">");
	$.ajax({url: "webdata.php?content=hasil&pid="+id+"&page="+i, success: function(result){
		$('#desktop #content').html(result);
		$('#desktop #content').fadeIn(500);
	}});
}

function dataPasaran()
{
	$.ajax({url: "webdata.php?content=dataPasaran", success: function(result){
		$('#dataPasaran').html(result);
		$('#dataPasaran').fadeIn(500);
	}});
}

function getBroadcast()
{
	$.ajax({url: "webdata.php?content=broadcast", success: function(result){
		$('#desktop #broadcast').html(result);
		$('#mobile #broadcast').html(result);
	}});
}

function getLucky()
{
	$.ajax({url: "webdata.php?content=lucky", success: function(result){
		$('#lucky').html(result);
	}});
}

function getLastDepo()
{
	$.ajax({url: "webdata.php?content=lastDepo", success: function(result){
		$('#lastDepo').html(result);
	}});
}

function getLastWD()
{
	$.ajax({url: "webdata.php?content=lastWD", success: function(result){
		$('#lastWD').html(result);
	}});
}

// MOBILE

function ke(todiv)
{    $('html, body').animate({
        scrollTop: $(todiv).offset().top
    }, 500);
}


$(document).on("keyup", "#mobileregister #reg_rek, #mobileregister #reg_telpon", function()
		{	
			var rek = $(this).val();
			rek = onlyNumber(rek);
			if (isNaN(rek)) rek = '';
			$(this).val(rek);		
		});

//
$(document).on("change", '#mobileregister #reg_dari', function()
	{
		inputdari = $('#mobileregister #reg_dari').val();
		
		if (inputdari == 'Lain-lain') 
		{
			$('#mobileregister #input-lain').show();
		}
		else
		{
			$('#mobileregister #input-lain').hide();
		}
	});
	

$(document).on("click", "#mobilelogin .submit", function()
	{
	var r = Math.floor(Math.random() * 10000);
	var ver = '<img src="m/capimg.php?'+r+'" style="height: 50px; width: 100%; border-radius: 5px;margin-top: 2px;">';	
	$('#mobilelogin #msgbox').removeClass().addClass('alert alert-sm alert-success').text('Validating').fadeIn(1000);
	
	$.post(mobileurl+"mwebdata.php", $('#mobilelogin .form').serialize(),
		function(data)
		{
			  if (data == 'success')
			  {  
				$('#mobilelogin #msgbox').removeClass().addClass('alert alert-sm alert-success').text('Logging in').fadeTo(900,1,
				  function()
				  { 
				  	var result           = '';
						var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
						var charactersLength = characters.length;
						for ( var i = 0; i < 16; i++ ) {
						result += characters.charAt(Math.floor(Math.random() * charactersLength));
						}
					  window.location='m/userarea.php?login='+result+'&home';
				  });
			  }
			  else
			  if (data == 'wrong')
			  {
				  $('#mobilelogin #msgbox').removeClass().addClass('alert alert-sm alert-danger').text('Salah Password').fadeIn(1000);
				  $('#mobilelogin #verifikasi').html(ver);
			  }
			  else
			  if (data == 'banned')
			  {
				  $('#mobilelogin #msgbox').removeClass().addClass('alert alert-sm alert-danger').text('User di Banned').fadeIn(1000);
				  $('#mobilelogin #verifikasi').html(ver);
			  }
			  else
			  if (data == 'empty')
			  {
				  $('#mobilelogin #msgbox').removeClass().addClass('alert alert-sm alert-warning').text('Silakan diisi').fadeIn(1000);
			  }
			  else
			  if (data == 'capempty')
			  {
				  $('#mobilelogin #msgbox').removeClass().addClass('alert alert-sm alert-warning').text('Verifikasi Kosong').fadeIn(1000);
				  $('#mobilelogin #verifikasi').html(ver);
			  }
			  else
			  if (data == 'caperror')
			  {
				  $('#mobilelogin #msgbox').removeClass().addClass('alert alert-sm alert-warning').text('Verifikasi Salah').fadeIn(1000);
				  $('#mobilelogin #verifikasi').html(ver);
			  }
			  else
			  if (data == 'cap')
			  {
				  $('#mobilelogin #msgbox').removeClass().addClass('alert alert-sm alert-warning').text('Isi Verifikasi').fadeIn(1000);
				  $('#mobilelogin #verifikasi').html(ver);
				  $('#mobilelogin .verifikasiform').show();
				  $('#mobilelogin .verifval').val('1');
			  }
			  else
			  if (data == 'reload')
			  {
				  window.location='index.php';
			  }
		});
	return false; 
});


function mresetClassReg()
{
	$('#mobileregister #input-username').removeClass().addClass('form-group-sm');
	$('#mobileregister #input-pass').removeClass().addClass('form-group-sm col-md-3');
	$('#mobileregister #input-passcon').removeClass().addClass('form-group-sm col-md-3');
	$('#mobileregister #input-bank').removeClass().addClass('form-group-sm col-md-3');
	$('#mobileregister #input-rek').removeClass().addClass('form-group-sm col-md-3');
	$('#mobileregister #input-nama').removeClass().addClass('form-group-sm col-md-3');
	$('#mobileregister #input-reg').removeClass().addClass('form-group-sm col-md-3');
	$('#mobileregister #input-email').removeClass().addClass('form-group-sm col-md-3');
	$('#mobileregister #input-telpon').removeClass().addClass('form-group-sm col-md-3');
	$('#mobileregister #input-dari').removeClass().addClass('form-group-sm col-md-3');
	$('#mobileregister #input-lain').removeClass().addClass('form-group-sm col-md-3');
}


$(document).on("click", "#mobileregister #buttonRegister", function()
	{
	var ver = "<img src=\"m/capreg.php\" width=\"100%\" style=\"height: 40px; width: 100%; border-radius: 5px;margin-top: -3px;\">";
	$('#mobileregister #statusRegister').removeClass().addClass('alert alert-sm alert-success').text('Validating').fadeIn(1000);
	
	$.post("m/mwebdata.php", $('#mobileregister #formRegister').serialize(),
		function(data)
		{
			  mresetClassReg();
			  
			  if (data == 'success')
			  {  
				$('#mobileregister #statusRegister').removeClass().addClass('alert alert-sm alert-success').text('Registrasi Sukses!, Selamat Bergabung, silakan isi data login Anda di form Login').fadeIn(900);
				
				
				$('#mobileregister #reg_passcon').val('');
				$('#mobileregister #reg_rek').val('');
				$('#mobileregister #reg_nama').val('');
				$('#mobileregister #reg_bank').val('');
				$('#mobileregister #reg_email').val('');
				$('#mobileregister #reg_telpon').val('');
				$('#mobileregister #reg_ref').val('');
				$('#mobileregister #reg_lain').val('');
				$('#mobileregister #reg_dari').val('');
				$('#mobileregister #reg_verifikasi').val('');
				
				$('#mobilelogin .username').val($('#mobileregister #reg_username').val());
				$('#mobileregister #reg_username').val('');
				$('#mobilelogin .password').val($('#mobileregister #reg_pass').val());
				$('#mobileregister #reg_pass').val('');
				$('#mobileregister #verform').focus();
				
			  }
			  else
			  if (data == 'userWrong')
			  {
				  $('#mobileregister #statusRegister').removeClass().addClass('alert alert-sm alert-warning').text('Username 6-16 karakter standar (A~Z, a~z, 0~9) dan tanpa spasi!').fadeIn(1000);
				  $('#mobileregister #input-username').addClass('has-error');
			  }
			  else
			  if (data == 'passWrong')
			  {
				  $('#mobileregister #statusRegister').removeClass().addClass('alert alert-sm alert-warning').text('Password harus 6 karakter atau lebih').fadeIn(1000);
				  $('#mobileregister #input-pass').addClass('has-error');
			  }
			  else
			  if (data == 'passSame')
			  {
				  $('#mobileregister #statusRegister').removeClass().addClass('alert alert-sm alert-warning').text('Password harus sama dengan konfirmasi').fadeIn(1000);
				  $('#mobileregister #input-passcon').addClass('has-error');
			  }
			  else
			  if (data == 'bankEmpty')
			  {
				  $('#mobileregister #statusRegister').removeClass().addClass('alert alert-sm alert-warning').text('Bank harus diisi').fadeIn(1000);
				  $('#mobileregister #input-bank').addClass('has-error');
			  }
			  else
			  if (data == 'rekEmpty')
			  {
				  $('#mobileregister #statusRegister').removeClass().addClass('alert alert-sm alert-warning').text('Nomor Rekening harus diisi dengan angka saja').fadeIn(1000);
				  $('#mobileregister #input-rek').addClass('has-error');
			  }
			  else
			  if (data == 'namaEmpty')
			  {
				  $('#mobileregister #statusRegister').removeClass().addClass('alert alert-sm alert-warning').text('Nama sesuai rekening harus diisi').fadeIn(1000);
				  $('#mobileregister #input-nama').addClass('has-error');
			  }
			  else
			  if (data == 'dbError')
			  {
				  $('#mobileregister #statusRegister').removeClass().addClass('alert alert-sm alert-warning').text('Maaf ada masalah dengan registrasi').fadeIn(1000);
			  }
			  else
			  if (data == 'userExist')
			  {
				  $('#mobileregister #statusRegister').removeClass().addClass('alert alert-sm alert-warning').text('Maaf username tersebut sudah ada').fadeIn(1000);
				  $('#mobileregister #input-username').addClass('has-error');
			  }
			  else
			  if (data == 'rekExist')
			  {
				  $('#mobileregister #statusRegister').removeClass().addClass('alert alert-sm alert-warning').text('Maaf no rekening tersebut sudah ada').fadeIn(1000);
				  $('#mobileregister #input-rek').addClass('has-error');
			  }
			  else
			  if (data == 'refError')
			  {
				  $('#mobileregister #statusRegister').removeClass().addClass('alert alert-sm alert-warning').text('Maaf tidak ada referal tersebut').fadeIn(1000);
				  $('#mobileregister #input-ref').addClass('has-error');
			  }
			  else
			  if (data == 'emailError')
			  {
				  $('#mobileregister #statusRegister').removeClass().addClass('alert alert-sm alert-warning').text('Maaf email tidak valid').fadeIn(1000);
				  $('#mobileregister #input-email').addClass('has-error');
			  }
			  else
			  if (data == 'telponEmpty')
			  {
				  $('#mobileregister #statusRegister').removeClass().addClass('alert alert-sm alert-warning').text('Maaf Telpon tidak boleh kosong').fadeIn(1000);
				  $('#mobileregister #input-telpon').addClass('has-error');
			  }
			  else
			  if (data == 'dariEmpty')
			  {
				  $('#mobileregister #statusRegister').removeClass().addClass('alert alert-sm alert-warning').text('Maaf silakan dipilih dari mana anda tahu website kami').fadeIn(1000);
				  $('#mobileregister #input-dari').addClass('has-error');
			  }
			  else
			  if (data == 'lainEmpty')
			  {
				  $('#mobileregister #statusRegister').removeClass().addClass('alert alert-sm alert-warning').text('Maaf mohon diisi kolom lain-lain').fadeIn(1000);
				  $('#mobileregister #input-lain').addClass('has-error');
			  }
			  else
			  if (data == 'caperror')
			  {
				  $('#mobileregister #statusRegister').removeClass().addClass('alert alert-sm alert-warning').text('Maaf Verifikasi Salah').fadeIn(1000);
				  $('#mobileregister #input-verifikasi').addClass('has-error');
				  $('#mobileregister #capverifikasi').html(ver);
			  }
			  
			  ke('#mobileregister #content'); 
		});
	return false; 
});

function mlogin()
{
	$('#mobilelogin .username').focus();	
}

function clearContent()
{
	$('#mobile #content').html('');
}

function topScroll()
{
	$('html, body').animate({ scrollTop: 0 }, 500);
        return false;
}

function mregister()
{
	$('#content').html("<img src=\"m/images/loading.gif\" width=\"16\">");
	$.ajax({url: "m/mwebdata.php?content=register", success: function(result){
		$('#mobile #content').html(result);
		$('#mobile #content').fadeIn(500);
		hidetoggle();
	}});
	ke('#mobile #content');
}

function togglepasaran(pid) {
  $("#togglepasaran"+pid).slideToggle(500);
};

function togglelive() {
  var x = document.getElementById("livemenu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  $('#msgbox').hide();
  $('#slotmenu').hide();
  $('#sportmenu').hide();
  $('#tembakmenu').hide();
}

function toggleslot() {
  var x = document.getElementById("slotmenu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  $('#msgbox').hide();
  $('#livemenu').hide();
  $('#sportmenu').hide();
  $('#tembakmenu').hide();
}

function togglesport() {
  var x = document.getElementById("sportmenu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  $('#msgbox').hide();
  $('#slotmenu').hide();
  $('#livemenu').hide();
  $('#tembakmenu').hide();
}

function toggletembak() {
  var x = document.getElementById("tembakmenu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  $('#mobile #msgbox').hide();
  $('#mobile #livemenu').hide();
  $('#mobile #sportmenu').hide();
  $('#mobile #slotmenu').hide();
}

function hidetoggle(){
	$('#mobile #livemenu').hide();
	$('#mobile #slotmenu').hide();
	$('#mobile #sportmenu').hide();
	$('#mobile #tembakmenu').hide();
}

var myIndexlive = 0;
function carousellive() {
  var i;
  var x = document.getElementsByClassName("mySlides-live");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndexlive++;
  if (myIndexlive > x.length) {myIndexlive = 1}    
  x[myIndexlive-1].style.display = "block";  
  setTimeout(carousellive, 3000); // Change image every 3 seconds
}
var myIndexslot = 0;
function carouselslot() {
  var i;
  var x = document.getElementsByClassName("mySlides-slot");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndexslot++;
  if (myIndexslot > x.length) {myIndexslot = 1}    
  x[myIndexslot-1].style.display = "block";  
  setTimeout(carouselslot, 3000); // Change image every 3 seconds
}
var myIndexsport = 0;
function carouselsport() {
  var i;
  var x = document.getElementsByClassName("mySlides-sport");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndexsport++;
  if (myIndexsport > x.length) {myIndexsport = 1}    
  x[myIndexsport-1].style.display = "block";  
  setTimeout(carouselsport, 3000); // Change image every 3 seconds
}
var myIndextembak = 0;
function carouseltembak() {
  var i;
  var x = document.getElementsByClassName("mySlides-tembak");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndextembak++;
  if (myIndextembak > x.length) {myIndextembak = 1}    
  x[myIndextembak-1].style.display = "block";  
  setTimeout(carouseltembak, 3000); // Change image every 3 seconds
}

$(document).ready(function(){
    $( "a.scrollLink" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
        hidetoggle();
    });
});
