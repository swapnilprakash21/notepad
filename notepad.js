$(function(){$('[data-toggle="tooltip"]').tooltip()});function escapeHtml(b){var a={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"};return b.replace(/[&<>"']/g,function(c){return a[c]})}$(".ribbon_btn").bind("mousedown",function(a){window.frames.notepad.window.getSelection().getRangeAt(0).startContainer;$("#notepad").contents().find(".notepad").click();a.preventDefault()});$("#notepad").contents().find("*").html(notepad_template);$(".bold_btn").on("click",function(){var a=window.frames.notepad;a.document.execCommand("bold")});$(".italic_btn").on("click",function(){var a=window.frames.notepad;a.document.execCommand("italic")});$(".underline_btn").on("click",function(){var a=window.frames.notepad;a.document.execCommand("underline")});$(".strike_through_btn").on("click",function(){var a=window.frames.notepad;a.document.execCommand("strikeThrough")});$(".align-left_btn").on("click",function(){var a=window.frames.notepad;a.document.execCommand("justifyLeft")});$(".align-center_btn").on("click",function(){var a=window.frames.notepad;a.document.execCommand("justifyCenter")});$(".align-right_btn").on("click",function(){var a=window.frames.notepad;a.document.execCommand("justifyRight")});$(".align-justify_btn").on("click",function(){var a=window.frames.notepad;a.document.execCommand("justifyFull")});$("#fontsize").on("input",function(){var a=$("#fontsize").val();notepad.document.execCommand("fontSize",true,a)});$(".save_btn").on("click",function(){var c=window.frames.notepad;var a=new Blob([window.btoa($("#notepad").contents().find(".notepad").html())],{type:"text/plain"});var d=$("input[name='save_option']:checked").val();if(d==="pdf"){c.focus();c.print()}else{if(d==="txt"){var b=URL.createObjectURL(a);download_link.href=b;download_link.click();$("#download_link").click()}else{if(d==="both"){c.focus();c.print();var b=URL.createObjectURL(a);download_link.href=b;download_link.click();$("#download_link").click()}else{alert("Error: Could not save file.")}}}});$("#txt").on("change",function(){var a=new FileReader();a.onload=function(){$("#notepad").contents().find(".notepad").html(window.atob(a.result))};a.readAsText(this.files[0])});$("#notepad").contents().find(".notepad").on("paste",function(c){c.preventDefault();var b=window.frames.notepad;var d=(c.originalEvent||c).clipboardData.getData("text/plain");var a=escapeHtml(d);b.document.execCommand("insertHTML",false,a)});setInterval(function(){var a=window.frames.notepad;if(a.document.queryCommandState("bold")){$(".bold_btn").css("background-color","lightblue")}else{$(".bold_btn").css("background-color","#ffffff")}},1);setInterval(function(){var a=window.frames.notepad;if(a.document.queryCommandState("italic")){$(".italic_btn").css("background-color","lightblue")}else{$(".italic_btn").css("background-color","#ffffff")}},1);setInterval(function(){var a=window.frames.notepad;if(a.document.queryCommandState("underline")){$(".underline_btn").css("background-color","lightblue")}else{$(".underline_btn").css("background-color","#ffffff")}},1);setInterval(function(){var a=window.frames.notepad;if(a.document.queryCommandState("strikeThrough")){$(".strike_through_btn").css("background-color","lightblue")}else{$(".strike_through_btn").css("background-color","#ffffff")}},1);setInterval(function(){var a=window.frames.notepad;if(a.document.queryCommandState("justifyLeft")){$(".align-left_btn").css("background-color","lightblue")}else{$(".align-left_btn").css("background-color","#ffffff")}},1);setInterval(function(){var a=window.frames.notepad;if(a.document.queryCommandState("justifyCenter")){$(".align-center_btn").css("background-color","lightblue")}else{$(".align-center_btn").css("background-color","#ffffff")}},1);setInterval(function(){var a=window.frames.notepad;if(a.document.queryCommandState("justifyRight")){$(".align-right_btn").css("background-color","lightblue")}else{$(".align-right_btn").css("background-color","#ffffff")}},1);setInterval(function(){var a=window.frames.notepad;if(a.document.queryCommandState("justifyFull")){$(".align-justify_btn").css("background-color","lightblue")}else{$(".align-justify_btn").css("background-color","#ffffff")}},1);
