// global document
'use strict';

function strip(html) {
	var tmp = document.createElement("DIV");
	tmp.innerHTML = html;
	
	return tmp.textContent || tmp.innerText;
}

var	htmlKeywords = /\bname\b|\bcharset\b|\btype\b|\brel\b|\bhref\b|\bsrc\b|\bcontent\b|\bclass\b|\bid\b|\balt\b|\bfor\b|\bmaxlength\b|\bminlength\b|\bvalue\b|\bonclick\b|\bonload\b/g,
		
	htmlList = {
		'name'			: "<attrdata>name</attrdata>",
		'charset'		: "<attrdata>charset</attrdata>",
		'type'			: "<attrdata>type</attrdata>",
		'rel'				: "<attrdata>rel</attrdata>",
		'href'			: "<attrdata>href</attrdata>",
		'src'				: "<attrdata>src</attrdata>",
		'content'		: "<attrdata>content</attrdata>",
		'class'			: "<attrdata>class</attrdata>",
		'id'				: "<attrdata>id</attrdata>",
		'alt'				: "<attrdata>alt</attrdata>",
		'for'				: "<attrdata>for</attrdata>",
		'maxlength'	: "<attrdata>maxlength</attrdata>",
		'minlength'	: "<attrdata>minlength</attrdata>",
		'value'			: "<attrdata>value</attrdata>",
		'onclick'		: "<attrdata>onclick</attrdata>",
		'onload'		: "<attrdata>onload</attrdata>"
		//''			: "<attrdata></attrdata>"
	},
		
	psudocodeDict = {
		'head'		: 'color: mediumblue;',
		'type'		: 'color: mediumblue; font-weight: 600; font-style: italic;',
		'boolean'	: 'color: darkred; font-weight: 600; font-style: italic;',
		'logic'		: 'color: green; font-style: italic;',
		'string'	: 'color: rebeccapurple;',
		'funct'		: 'color: darkviolet; font-weight: 600;',
		'comment'	: 'color: green; font-weight: 600;'
	},
	psudocodeKeywords = /\bConstant\b|\bDeclare\b|\bInteger\b|\bFloat\b|\bReal\b|\bFunction\b|\bReturn\b|\bString\b|\bBoolean\b|\bTo\b|\bDo\b|\bModule\b|\bIf\b|\bElse\b|\bSelect\b|\bCase\b|\bInput\b|\bDisplay\b|\bSet\b|\bCall\b|\bWhile\b|\bUntil\b|\bFor\b|\bEnd\b|\bTab\b|\bCR\b|\bCLR\b|\bThen\b|\bRef\b|\bNOT\b|\bOR\b|\bAND\b|\bTrue\b|\bFalse\b|\bsqrt\b|\bround\b|\bappend\b|\brandom\b|\bcurrency\b|\bsleep\b|\btoReal\b|\btoString\b|\btoUpper\b|\btoFloat\b/g,
	psudocodeList = {
		/*Psudocode Keywords*/
		'Constant': "<span style='" + psudocodeDict.head + "'>Constant</span>",
		'Declare'	: "<span style='" + psudocodeDict.head + "'>Declare</span>",
		'Module'	: "<span style='" + psudocodeDict.head + "'>Module</span>",
		'Select'	: "<span style='" + psudocodeDict.head + "'>Select</span>",
		'Case'		: "<span style='" + psudocodeDict.head + "'>Case</span>",
		'Input'		: "<span style='" + psudocodeDict.head + "'>Input</span>",
		'If'			: "<span style='" + psudocodeDict.head + "'>If</span>",
		'Else'		: "<span style='" + psudocodeDict.head + "'>Else</span>",
		'End'			: "<span style='" + psudocodeDict.head + "'>End</span>",
		'Do'			: "<span style='" + psudocodeDict.head + "'>Do</span>",
		'While'		: "<span style='" + psudocodeDict.head + "'>While</span>",
		'Until'		: "<span style='" + psudocodeDict.head + "'>Until</span>",
		'For'			: "<span style='" + psudocodeDict.head + "'>For</span>",
		'To'			: "<span style='" + psudocodeDict.head + "'>To</span>",
		'Call'		: "<span style='" + psudocodeDict.head + "'>Call</span>",
		'Display'	: "<span style='" + psudocodeDict.head + "'>Display</span>",
		'Function': "<span style='" + psudocodeDict.head + "'>Function</span>",
		'Return'	: "<span style='" + psudocodeDict.head + "'>Return</span>",
		'Set'			: "<span style='" + psudocodeDict.head + "'>Set</span>",
		'Then'		: "<span style='" + psudocodeDict.head + "'>Then</span>",
		'Ref'			: "<span style='" + psudocodeDict.head + "'>Ref</span>",
			
		'Integer'	: "<span style='" + psudocodeDict.type + "'>Integer</span>",
		'Float'		: "<span style='" + psudocodeDict.type + "'>Float</span>",
		'String'	: "<span style='" + psudocodeDict.type + "'>String</span>",
		'Real'		: "<span style='" + psudocodeDict.type + "'>Real</span>",
		'Boolean'	: "<span style='" + psudocodeDict.type + "'>Boolean</span>",
		
		'NOT'			: "<span style='" + psudocodeDict.logic + "'>NOT</span>",
		'OR'			: "<span style='" + psudocodeDict.logic + "'>OR</span>",
		'AND'			: "<span style='" + psudocodeDict.logic + "'>AND</span>",
			
		'True'		: "<span style='" + psudocodeDict.boolean + "'>True</span>",
		'False'		: "<span style='" + psudocodeDict.boolean + "'>False</span>",
			
		'round'		: "<span style='" + psudocodeDict.funct + "'>Round</span>",
		'sqrt'		: "<span style='" + psudocodeDict.funct + "'>sqrt</span>",
		'Tab'			: "<span style='" + psudocodeDict.funct + "'>Tab</span>",
		'CR'			: "<span style='" + psudocodeDict.funct + "'>CR</span>",
		'CLR'			: "<span style='" + psudocodeDict.funct + "'>CLR</span>",
		'currency': "<span style='" + psudocodeDict.funct + "'>currency</span>",
		'sleep'		: "<span style='" + psudocodeDict.funct + "'>sleep</span>",
		'append'	: "<span style='" + psudocodeDict.funct + "'>append</span>",
		'random'	: "<span style='" + psudocodeDict.funct + "'>random</span>",
		'toReal'	: "<span style='" + psudocodeDict.funct + "'>toReal</span>",
		'toString': "<span style='" + psudocodeDict.funct + "'>toString</span>",
		'toFloat'	: "<span style='" + psudocodeDict.funct + "'>toFloat</span>",
		'toUpper'	: "<span style='" + psudocodeDict.funct + "'>toUpper</span>"
	},
		
	javascriptKeywords = /\bfunction\b|\bvar\b|\bfor\b|\bwhile\b|\bthis\b|\breturn\b|\bif\b|\belse\b|(\$\()|\bwindow\b|\bdocument\b|\bconsole\b|\be\b|\bevt\b|\bevent\b|\btrue\b|\bfalse\b/g,
		
	javascriptList = {
		'function': "<functiondata>function</functiondata>",
		'return'	: "<functiondata>return</functiondata>",
		'var'			: "<functiondata>var</functiondata>",
		'for'			: "<functiondata>for</functiondata>",
		'while'		: "<functiondata>while</functiondata>",
		'if'			: "<functiondata>if</functiondata>",
		'else'		: "<functiondata>else</functiondata>",
		'this'		: "<functiondata>this</functiondata>",
			
		'$('			: "<locationdata>$</locationdata>(",
		'window'	: "<locationdata>window</locationdata>",
		'document': "<locationdata>document</locationdata>",
		'console'	: "<locationdata>console</locationdata>",
		
		'e'				: "<eventdata>e</eventdata>",
		'evt'			: "<eventdata>evt</eventdata>",
		'event'		: "<eventdata>event</eventdata>",
			
		'true'		: "<booleandata>true</booleandata>",
		'false'		: "<booleandata>false</booleandata>"
	},
		
	phpKeywords = /\bfunction\b|\breturn\b|\bempty\b|\bisset\b|\bthrow\b|\bcatch\b|\bif\b|\belse\b|\barray\b|\bfor\b|\bforeach\b|\bas\b|\bwhile\b|\becho\b|\bglobal\b|\bpreg_match\b|\bstrlen\b|\bsubstr\b|\btrim\b|\bmysql_error\b|\bmysql_errno\b|\bmysql_num_rows\b|\bmysql_fetch_assoc\b|\bmysql_free_result\b|\bmysql_close\b|\b$_POST\b|\btrue\b|\bfalse\b|\bTRUE\b|\bFALSE\b|\bPHP_EOL\b|\@mysql_connect\b|\@mysql_query\b|\@mysql_select_db\b|\bmysql_select_db\b|\bcontinue\b|\bprint\b|\bopendir\b|\bclosedir\b|\bis_dir\b|\breaddir\b|\bgettype\b|\bexplode\b/g,
		
	phpList = {
		'function'	: "<functiondata>function</functiondata>",
		'return'		: "<functiondata>return</functiondata>",
		'empty'			: "<functiondata>empty</functiondata>",
		'isset'			: "<functiondata>isset</functiondata>",
		'throw'			: "<functiondata>throw</functiondata>",
		'catch'			: "<functiondata>catch</functiondata>",
		'if'				: "<functiondata>if</functiondata>",
		'else'			: "<functiondata>else</functiondata>",
		'array'			: "<functiondata>array</functiondata>",
		'for'				: "<functiondata>for</functiondata>",
		'foreach'		: "<functiondata>foreach</functiondata>",
		'as'				: "<functiondata>as</functiondata>",
		'while'			: "<functiondata>while</functiondata>",
		'echo'			: "<functiondata>echo</functiondata>",
		'global'		: "<functiondata>global</functiondata>",
		'continue'	: "<functiondata>continue</functiondata>",
		'print'			: "<functiondata>print</functiondata>",
		
		'preg_match'				: "<methoddata>preg_match</methoddata>",
		'strlen'						: "<methoddata>strlen</methoddata>",
		'substr'						: "<methoddata>substr</methoddata>",
		'trim'							: "<methoddata>trim</methoddata>",
		'mysql_error'				: "<methoddata>mysql_error</methoddata>",
		'mysql_errno'				: "<methoddata>mysql_errno</methoddata>",
		'mysql_num_rows'		: "<methoddata>mysql_num_rows</methoddata>",
		'mysql_fetch_assoc'	: "<methoddata>mysql_fetch_assoc</methoddata>",
		'mysql_close'				: "<methoddata>mysql_close</methoddata>",
		'mysql_free_result'	: "<methoddata>mysql_free_result</methoddata>",
		'mysql_select_db'		: "<methoddata>mysql_select_db</methoddata>",
		'opendir'						: "<methoddata>opendir</methoddata>",
		'closedir'					: "<methoddata>closedir</methoddata>",
		'readdir'						: "<methoddata>readdir</methoddata>",
		'is_dir'						: "<methoddata>is_dir</methoddata>",
		'$_POST'						: "<methoddata>$_POST</methoddata>",
		'gettype'						: "<methoddata>gettype</methoddata>",
		'explode'						: "<methoddata>explode</methoddata>",
			
		'true'						: "<booleandata>true</booleandata>",
		'false'						: "<booleandata>false</booleandata>",
		'TRUE'						: "<booleandata>TRUE</booleandata>",
		'FALSE'						: "<booleandata>FALSE</booleandata>",
		
		'PHP_EOL'					: "<externaldata>PHP_EOL</externaldata>",
		'@mysql_connect'	: "<externaldata>@mysql_connect</externaldata>",
		'@mysql_select_db': "<externaldata>@mysql_select_db</externaldata>",
		'@mysql_query'		: "<externaldata>@mysql_query</externaldata>"
	},
		
	pythonKeywords = /\bimport\b|\bas\b|\bfrom\b|\bdef\b|\breturn\b|\bfor\b|\bin\b|\bif\b|\bnot\b|\belse\b|\belif\b|\bwhile\b|\bTrue\b|\bFalse\b|\bbreak\b|\bcontinue\b|\btry\b|\bexcept\b|\bexit\b|\bprint\b|\binput\b|\bmap\b|\bzip\b|\bdict\b|\blist\b|\beval\b|\bint\b|\bfloat\b|\bstr\b|\babs\b|\benumerate\b|\brange\b|\bopen\b|\blen\b/g,
		
	pythonList = {
		'import' 	: "<pythondata>import</pythondata>",
		'as' 			: "<pythondata>as</pythondata>",
		'from' 		: "<pythondata>from</pythondata>",
		'def' 		: "<pythondata>def</pythondata>",
		'return' 	: "<pythondata>return</pythondata>",
		'for' 		: "<pythondata>for</pythondata>",
		'in' 			: "<pythondata>in</pythondata>",
		'if' 			: "<pythondata>if</pythondata>",
		'not' 		: "<pythondata>not</pythondata>",
		'else' 		: "<pythondata>else</pythondata>",
		'elif' 		: "<pythondata>elif</pythondata>",
		'while' 	: "<pythondata>while</pythondata>",
		'True' 		: "<pythondata>True</pythondata>",
		'False' 	: "<pythondata>False</pythondata>",
		'break' 	: "<pythondata>break</pythondata>",
		'continue': "<pythondata>continue</pythondata>",
		'try' 		: "<pythondata>try</pythondata>",
		'except' 	: "<pythondata>except</pythondata>",
			
		'exit' 			: "<functiondata>exit</functiondata>",
		'print' 		: "<functiondata>print</functiondata>",
		'input' 		: "<functiondata>input</functiondata>",
		'map' 			: "<functiondata>map</functiondata>",
		'zip' 			: "<functiondata>zip</functiondata>",
		'dict' 			: "<functiondata>dict</functiondata>",
		'list' 			: "<functiondata>list</functiondata>",
		'eval' 			: "<functiondata>eval</functiondata>",
		'int' 			: "<functiondata>int</functiondata>",
		'float' 		: "<functiondata>float</functiondata>",
		'str' 			: "<functiondata>str</functiondata>",
		'abs' 			: "<functiondata>abs</functiondata>",
		'enumerate' : "<functiondata>enumerate</functiondata>",
		'range' 		: "<functiondata>range</functiondata>",
		'open' 			: "<functiondata>open</functiondata>",
		'len' 			: "<functiondata>len</functiondata>"
	};

function colorCode(type) {
	$("pre").each(function() {
		var oldHTML = $(this).html();
		if (type === 'psudo') {
			
			//FOR TEXT WITHIN QUOTES
			oldHTML = oldHTML.replace(/"(?:[^"\\]|\\.)*"/g, "<span style='" + psudocodeDict.string + "'>$&</span>");

			// FOR PSUDOCODE LIST
			oldHTML = oldHTML.replace(psudocodeKeywords, function(matched) {
				matched = strip(matched);
				return psudocodeList[matched];
			}
			);
			// FOR PSUDOCODE COMMENTS
			oldHTML = oldHTML.replace(/(\/{2}(.*)|$)/g, function(matched) {
				matched = strip(matched);
				return "<span style='" + psudocodeDict.comment + "'>" + matched + "</span>";
			}
			);
		}
		if (type === 'javascript') {
			// FOR REGEXES
			oldHTML = oldHTML.replace(/\/[^*/\w](?:[^\/]|\\.)+\/([g|i|m|,]){1,2}/g, "<stringdata>$&</stringdata>");
			// FOR SINGLE QUOTES
			oldHTML = oldHTML.replace(/'(?:[^'\\]|\\.){0,60}'/g, "<stringdata>$&</stringdata>");
			// FOR TEXT WITHIN DOUBLE QUOTES
			oldHTML = oldHTML.replace(/"(?:[^"\\]|\\.){0,100}"/g, "<stringdata>$&</stringdata>");
			// FOR JAVASCRIPT LIST
			oldHTML = oldHTML.replace(javascriptKeywords, function(x){return javascriptList[x]});
			// FOR SINGLE LINE COMMENTS
			oldHTML = oldHTML.replace(/((?:\n)|[\t])\/\/(?:.*)/g, "<commentdata>$&</commentdata>");
			// FOR BLOCK COMMENTS
			oldHTML = oldHTML.replace(/\/\*\n((.*?)\n)+\*\//g, "<commentdata>$&</commentdata>");
		}
		if (type === 'php') {
			// FOR SINGLE QUOTES
			oldHTML = oldHTML.replace(/'(?:[^'\\]|\\.){0,60}'/g, "<stringdata>$&</stringdata>");
			// FOR TEXT WITHIN DOUBLE QUOTES
			oldHTML = oldHTML.replace(/"(?:[^"\\]|\\.){0,195}"/g, "<stringdata>$&</stringdata>");
			// FOR PHP VARIABLES
			oldHTML = oldHTML.replace(/\$(\w+?)\b/g, "<variabledata>$&</variabledata>");
			// FOR PHP LIST
			oldHTML = oldHTML.replace(phpKeywords, function(x){return phpList[x]});
			// FOR HTML TAGS
			oldHTML = oldHTML.replace(/(\&lt;(.)+?)(?:[ ]|\&gt;)/g, "<tagdata>$&</tagdata>");
			// FOR HTML TAGS
			oldHTML = oldHTML.replace(/\&gt;/g, "<tagdata>$&</tagdata>");
			// FOR HTML ATTR LIST
			oldHTML = oldHTML.replace(htmlKeywords, function(x){return htmlList[x]});
			// FOR REGEXES
			oldHTML = oldHTML.replace(/\/[^*/\w](?:[^\/]|\\.)+\/([g|i|m|,]){1,2}/g, "<stringdata>$&</stringdata>");
			// FOR SINGLE LINE COMMENTS
			oldHTML = oldHTML.replace(/((?:\W)|[\t])\/\/(?:.*)/g, "<commentdata>$&</commentdata>");
			// FOR BLOCK COMMENTS
			oldHTML = oldHTML.replace(/\/\*(.*?|\n)*?\*\//g, "<commentdata>$&</commentdata>");
		}
		if (type === 'python') {
			// FOR TEXT WITHIN TRIPLE QUOTES
			oldHTML = oldHTML.replace(/"""(?:[^"\\]|\\.)*"""/g, "<stringdata>$&</stringdata>");
			// FOR SINGLE QUOTES
			oldHTML = oldHTML.replace(/'(?:[^'\\]|\\.){0,60}'/g, "<stringdata>$&</stringdata>");
			// FOR TEXT WITHIN DOUBLE QUOTES
			oldHTML = oldHTML.replace(/"(?:[^"\\]|\\.){0,195}"/g, "<stringdata>$&</stringdata>");
			// FOR PYTHON LIST
			oldHTML = oldHTML.replace(pythonKeywords, function(x){return pythonList[x]});
			// FOR PYTHON COMMENTS
			oldHTML = oldHTML.replace(/#(.+)\n/g, "<pythoncomment>$&</pythoncomment>");
		}
		
		var oldHTML = oldHTML.replace(/\t/g, "  ");
		$(this).html(oldHTML);
	});
}