/*
Plugin NOME
Data: 28/04/2013
Autor: Renalcio Carlos
Email: r.carlos@live.com
Opções:
-- funcao:
* kitbar - barra do userkit no topo do site. (add plugin ba-outside-events e jcookie).
www.fabricadaweb.com.br
*/
(function($){
		$.fn.tabs = function(options){
		// configurações padrão
		var config = { 
			efeito: 'nulo',
			iniciante: 0,
            xhtml: true,
		};
	options = $.extend(config,options);
	return this.each(function(){
		if(options.xhtml==true){
		//Definições de inicio
        $("item>titulo", this).addClass("tabTitulo");
		$("item>conteudo", this).addClass("tabConteudo");
		$("item:first>titulo", this).addClass("tabTituloAtual");
		$("item>conteudo", this).hide();
		$("item:first>conteudo", this).addClass("tabConteudoAtual");
        $("item:first>conteudo", this).show();
		
        $("menu>item", this).click(function(){
            var num = $(this).index();
			$(this).parent().find("item").removeClass("tabTituloAtual");
            $(this).addClass("tabTituloAtual");
			$(this).parent().parent().find("abas").find("conteudo").hide().removeClass("tabConteudoAtual");
			$(this).parent().parent().find("abas").find("conteudo").eq(num).show().addClass("tabConteudoAtual");
		});
		}else{
		var set = $(this).attr("set");
		var menuSet = $('li.item', this);
		var itemSet = $('div.item', this);
		$("ul", this).addClass("set");
		$("div."+options.itemClass).hide();
		$("div#"+options.itemClass+"-1").show();
		$("ul li:first", this).css("border-color", options.corHover);
		$("ul li", this).click(function(){
			var num = $(this).attr('n');
			$("ul[set="+set+"] li").css("border-color", options.corNormal);
			$(this).css("border-color", options.corHover);
			$("div[set="+set+"]."+options.itemClass).hide();
			$("div[set="+set+"]#"+options.itemClass+"-"+num).fadeIn();
		});	
		}
	});
	};
})(jQuery);
			