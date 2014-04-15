/*
Plugin Tabs
Data: 14/04/2014
Autor: Renalcio Carlos
Email: r.carlos@live.com
-------------------------------------------
Para a v2:
Width, Height, Cookies, onChange, Efeitos.
-------------------------------------------
*/
(function($){
		$.fn.tab = function(options){
		// configurações padrão
		var config = { 
			iniciante: 1,           // Aba Inicial
            xhtml: true,            // Tags XHTML Personalizadas?
            menu: "menu",           // Tag de conjunto de Menu
            abasConteudo: "aba",            // Tag de item de Menu
            conteudo: "conteudo",   // Tag de Conjunto de Conteudo
            principal: "tabs",      // Tag do conjunto Principal
            itensMenu: "item",          // Tag de item de Conteudo
		};
	options = $.extend(config,options);
	return this.each(function(){
	   options.iniciante = parseInt(options.iniciante)-1;
		if(options.xhtml==true){
            var menuItem = options.menu+">"+ options.itensMenu;
            var conteudoAba = options.conteudo+">"+ options.abasConteudo;
            var conteudo = options.conteudo;
            var menu = options.menu;
            var tabs = options.principal;
            var item = options.itensMenu;
            var aba = options.abasConteudo;
		}else{
            var menuItem = "ul:first>li";
            var conteudoAba = "div.conteudo>div.aba";
            var conteudo = "div.conteudo";
            var menu = "ul:first";
            var tabs = "tabs";
            var item = "li.tabTitulo";
            var aba = "div.aba";
            $(this).addClass(tabs);
		}
        
        //Definições de inicio
        $(menuItem, this).removeClass("tabTituloAtual");
		$(conteudoAba, this).removeClass("tabConteudoAtual");
        $(menuItem, this).addClass("tabTitulo");
		$(conteudoAba, this).addClass("tabConteudo").hide();
		$(menuItem, this).eq(options.iniciante).addClass("tabTituloAtual");
		$(conteudoAba, this).eq(options.iniciante).addClass("tabConteudoAtual").show();
        
        $(menuItem, this).click(function(){
            var num = $(this).index();
			$(this).parent().find(item).removeClass("tabTituloAtual");
            $(this).addClass("tabTituloAtual");
			$(this).parent().parent().find(conteudo).find(aba).hide().removeClass("tabConteudoAtual");
			$(this).parent().parent().find(conteudo).find(aba).eq(num).show().addClass("tabConteudoAtual");
		});
	});
	};
})(jQuery);
			