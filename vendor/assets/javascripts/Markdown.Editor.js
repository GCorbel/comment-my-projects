



<!DOCTYPE html>
<html>
<head>
 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
 <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" >
 
 <meta name="ROBOTS" content="NOARCHIVE">
 
 <link rel="icon" type="image/vnd.microsoft.icon" href="http://www.gstatic.com/codesite/ph/images/phosting.ico">
 
 
 <script type="text/javascript">
 
 
 
 
 var codesite_token = null;
 
 
 var CS_env = {"profileUrl":null,"token":null,"assetHostPath":"http://www.gstatic.com/codesite/ph","domainName":null,"assetVersionPath":"http://www.gstatic.com/codesite/ph/11556196549636558490","projectHomeUrl":"/p/pagedown","relativeBaseUrl":"","projectName":"pagedown","loggedInUserEmail":null};
 var _gaq = _gaq || [];
 _gaq.push(
 ['siteTracker._setAccount', 'UA-18071-1'],
 ['siteTracker._trackPageview']);
 
 (function() {
 var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
 ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
 (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ga);
 })();
 
 </script>
 
 
 <title>Markdown.Editor.js - 
 pagedown -
 
 
 A JavaScript Markdown converter and editor - Google Project Hosting
 </title>
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/11556196549636558490/css/core.css">
 
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/11556196549636558490/css/ph_detail.css" >
 
 
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/11556196549636558490/css/d_sb.css" >
 
 
 
<!--[if IE]>
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/11556196549636558490/css/d_ie.css" >
<![endif]-->
 <style type="text/css">
 .menuIcon.off { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -42px }
 .menuIcon.on { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -28px }
 .menuIcon.down { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 0; }
 
 
 
  tr.inline_comment {
 background: #fff;
 vertical-align: top;
 }
 div.draft, div.published {
 padding: .3em;
 border: 1px solid #999; 
 margin-bottom: .1em;
 font-family: arial, sans-serif;
 max-width: 60em;
 }
 div.draft {
 background: #ffa;
 } 
 div.published {
 background: #e5ecf9;
 }
 div.published .body, div.draft .body {
 padding: .5em .1em .1em .1em;
 max-width: 60em;
 white-space: pre-wrap;
 white-space: -moz-pre-wrap;
 white-space: -pre-wrap;
 white-space: -o-pre-wrap;
 word-wrap: break-word;
 font-size: 1em;
 }
 div.draft .actions {
 margin-left: 1em;
 font-size: 90%;
 }
 div.draft form {
 padding: .5em .5em .5em 0;
 }
 div.draft textarea, div.published textarea {
 width: 95%;
 height: 10em;
 font-family: arial, sans-serif;
 margin-bottom: .5em;
 }

 
 .nocursor, .nocursor td, .cursor_hidden, .cursor_hidden td {
 background-color: white;
 height: 2px;
 }
 .cursor, .cursor td {
 background-color: darkblue;
 height: 2px;
 display: '';
 }
 
 
.list {
 border: 1px solid white;
 border-bottom: 0;
}

 
 </style>
</head>
<body class="t4">
<script type="text/javascript">
 window.___gcfg = {lang: 'en'};
 (function() 
 {var po = document.createElement("script");
 po.type = "text/javascript"; po.async = true;po.src = "https://apis.google.com/js/plusone.js";
 var s = document.getElementsByTagName("script")[0];
 s.parentNode.insertBefore(po, s);
 })();
</script>
<div class="headbg">

 <div id="gaia">
 

 <span>
 
 <a href="#" id="projects-dropdown" onclick="return false;"><u>My favorites</u> <small>&#9660;</small></a>
 | <a href="https://www.google.com/accounts/ServiceLogin?service=code&amp;ltmpl=phosting&amp;continue=http%3A%2F%2Fcode.google.com%2Fp%2Fpagedown%2Fsource%2Fbrowse%2FMarkdown.Editor.js&amp;followup=http%3A%2F%2Fcode.google.com%2Fp%2Fpagedown%2Fsource%2Fbrowse%2FMarkdown.Editor.js" onclick="_CS_click('/gb/ph/signin');"><u>Sign in</u></a>
 
 </span>

 </div>

 <div class="gbh" style="left: 0pt;"></div>
 <div class="gbh" style="right: 0pt;"></div>
 
 
 <div style="height: 1px"></div>
<!--[if lte IE 7]>
<div style="text-align:center;">
Your version of Internet Explorer is not supported. Try a browser that
contributes to open source, such as <a href="http://www.firefox.com">Firefox</a>,
<a href="http://www.google.com/chrome">Google Chrome</a>, or
<a href="http://code.google.com/chrome/chromeframe/">Google Chrome Frame</a>.
</div>
<![endif]-->



 <table style="padding:0px; margin: 0px 0px 10px 0px; width:100%" cellpadding="0" cellspacing="0"
 itemscope itemtype="http://schema.org/CreativeWork">
 <tr style="height: 58px;">
 
 <td id="plogo">
 <link itemprop="url" href="/p/pagedown">
 <a href="/p/pagedown/">
 
 <img src="http://www.gstatic.com/codesite/ph/images/defaultlogo.png" alt="Logo" itemprop="image">
 
 </a>
 </td>
 
 <td style="padding-left: 0.5em">
 
 <div id="pname">
 <a href="/p/pagedown/"><span itemprop="name">pagedown</span></a>
 </div>
 
 <div id="psum">
 <a id="project_summary_link"
 href="/p/pagedown/"><span itemprop="description">A JavaScript Markdown converter and editor</span></a>
 
 </div>
 
 
 </td>
 <td style="white-space:nowrap;text-align:right; vertical-align:bottom;">
 
 <form action="/hosting/search">
 <input size="30" name="q" value="" type="text">
 
 <input type="submit" name="projectsearch" value="Search projects" >
 </form>
 
 </tr>
 </table>

</div>

 
<div id="mt" class="gtb"> 
 <a href="/p/pagedown/" class="tab ">Project&nbsp;Home</a>
 
 
 
 
 <a href="/p/pagedown/downloads/list" class="tab ">Downloads</a>
 
 
 
 
 
 <a href="/p/pagedown/w/list" class="tab ">Wiki</a>
 
 
 
 
 
 <a href="/p/pagedown/issues/list"
 class="tab ">Issues</a>
 
 
 
 
 
 <a href="/p/pagedown/source/checkout"
 class="tab active">Source</a>
 
 
 
 
 
 
 
 <div class=gtbc></div>
</div>
<table cellspacing="0" cellpadding="0" width="100%" align="center" border="0" class="st">
 <tr>
 
 
 
 
 
 
 
 <td class="subt">
 <div class="st2">
 <div class="isf">
 
 <form action="/p/pagedown/source/browse" style="display: inline">
 
 Repository:
 <select name="repo" id="repo" style="font-size: 92%" onchange="submit()">
 <option value="default">default</option><option value="wiki">wiki</option>
 </select>
 </form>
 
 


 <span class="inst1"><a href="/p/pagedown/source/checkout">Checkout</a></span> &nbsp;
 <span class="inst2"><a href="/p/pagedown/source/browse/">Browse</a></span> &nbsp;
 <span class="inst3"><a href="/p/pagedown/source/list">Changes</a></span> &nbsp;
 <span class="inst4"><a href="/p/pagedown/source/clones">Clones</a></span> &nbsp; 
 &nbsp;
 
 
 <form action="/p/pagedown/source/search" method="get" style="display:inline"
 onsubmit="document.getElementById('codesearchq').value = document.getElementById('origq').value">
 <input type="hidden" name="q" id="codesearchq" value="">
 <input type="text" maxlength="2048" size="38" id="origq" name="origq" value="" title="Google Code Search" style="font-size:92%">&nbsp;<input type="submit" value="Search Trunk" name="btnG" style="font-size:92%">
 
 
 
 
 
 
 </form>
 <script type="text/javascript">
 
 function codesearchQuery(form) {
 var query = document.getElementById('q').value;
 if (query) { form.action += '%20' + query; }
 }
 </script>
 </div>
</div>

 </td>
 
 
 
 <td align="right" valign="top" class="bevel-right"></td>
 </tr>
</table>


<script type="text/javascript">
 var cancelBubble = false;
 function _go(url) { document.location = url; }
</script>
<div id="maincol"
 
>

 
<!-- IE -->




<div class="expand">
<div id="colcontrol">
<style type="text/css">
 #file_flipper { white-space: nowrap; padding-right: 2em; }
 #file_flipper.hidden { display: none; }
 #file_flipper .pagelink { color: #0000CC; text-decoration: underline; }
 #file_flipper #visiblefiles { padding-left: 0.5em; padding-right: 0.5em; }
</style>
<table id="nav_and_rev" class="list"
 cellpadding="0" cellspacing="0" width="100%">
 <tr>
 
 <td nowrap="nowrap" class="src_crumbs src_nav" width="33%">
 <strong class="src_nav">Source path:&nbsp;</strong>
 <span id="crumb_root">
 
 <a href="/p/pagedown/source/browse/">hg</a>/&nbsp;</span>
 <span id="crumb_links" class="ifClosed">Markdown.Editor.js</span>
 
 

 </td>
 
 
 <td nowrap="nowrap" width="33%" align="right">
 <table cellpadding="0" cellspacing="0" style="font-size: 100%"><tr>
 
 
 <td class="flipper">
 <ul class="leftside">
 
 <li><a href="/p/pagedown/source/browse/Markdown.Editor.js?r=46bb422ffaa27b3a2895ff3ce8c31f8b491fa9a9" title="Previous">&lsaquo;46bb422ffaa2</a></li>
 
 </ul>
 </td>
 
 <td class="flipper"><b>3151a581819f</b></td>
 
 </tr></table>
 </td> 
 </tr>
</table>

<div class="fc">
 
 
 
<style type="text/css">
.undermouse span {
 background-image: url(http://www.gstatic.com/codesite/ph/images/comments.gif); }
</style>
<table class="opened" id="review_comment_area"
><tr>
<td id="nums">
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
<pre><table width="100%" id="nums_table_0"><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1"

><td id="1"><a href="#1">1</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2"

><td id="2"><a href="#2">2</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_3"

><td id="3"><a href="#3">3</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_4"

><td id="4"><a href="#4">4</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_5"

><td id="5"><a href="#5">5</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_6"

><td id="6"><a href="#6">6</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_7"

><td id="7"><a href="#7">7</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_8"

><td id="8"><a href="#8">8</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_9"

><td id="9"><a href="#9">9</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_10"

><td id="10"><a href="#10">10</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_11"

><td id="11"><a href="#11">11</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_12"

><td id="12"><a href="#12">12</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_13"

><td id="13"><a href="#13">13</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_14"

><td id="14"><a href="#14">14</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_15"

><td id="15"><a href="#15">15</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_16"

><td id="16"><a href="#16">16</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_17"

><td id="17"><a href="#17">17</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_18"

><td id="18"><a href="#18">18</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_19"

><td id="19"><a href="#19">19</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_20"

><td id="20"><a href="#20">20</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_21"

><td id="21"><a href="#21">21</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_22"

><td id="22"><a href="#22">22</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_23"

><td id="23"><a href="#23">23</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_24"

><td id="24"><a href="#24">24</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_25"

><td id="25"><a href="#25">25</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_26"

><td id="26"><a href="#26">26</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_27"

><td id="27"><a href="#27">27</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_28"

><td id="28"><a href="#28">28</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_29"

><td id="29"><a href="#29">29</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_30"

><td id="30"><a href="#30">30</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_31"

><td id="31"><a href="#31">31</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_32"

><td id="32"><a href="#32">32</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_33"

><td id="33"><a href="#33">33</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_34"

><td id="34"><a href="#34">34</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_35"

><td id="35"><a href="#35">35</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_36"

><td id="36"><a href="#36">36</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_37"

><td id="37"><a href="#37">37</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_38"

><td id="38"><a href="#38">38</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_39"

><td id="39"><a href="#39">39</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_40"

><td id="40"><a href="#40">40</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_41"

><td id="41"><a href="#41">41</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_42"

><td id="42"><a href="#42">42</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_43"

><td id="43"><a href="#43">43</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_44"

><td id="44"><a href="#44">44</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_45"

><td id="45"><a href="#45">45</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_46"

><td id="46"><a href="#46">46</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_47"

><td id="47"><a href="#47">47</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_48"

><td id="48"><a href="#48">48</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_49"

><td id="49"><a href="#49">49</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_50"

><td id="50"><a href="#50">50</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_51"

><td id="51"><a href="#51">51</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_52"

><td id="52"><a href="#52">52</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_53"

><td id="53"><a href="#53">53</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_54"

><td id="54"><a href="#54">54</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_55"

><td id="55"><a href="#55">55</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_56"

><td id="56"><a href="#56">56</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_57"

><td id="57"><a href="#57">57</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_58"

><td id="58"><a href="#58">58</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_59"

><td id="59"><a href="#59">59</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_60"

><td id="60"><a href="#60">60</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_61"

><td id="61"><a href="#61">61</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_62"

><td id="62"><a href="#62">62</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_63"

><td id="63"><a href="#63">63</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_64"

><td id="64"><a href="#64">64</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_65"

><td id="65"><a href="#65">65</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_66"

><td id="66"><a href="#66">66</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_67"

><td id="67"><a href="#67">67</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_68"

><td id="68"><a href="#68">68</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_69"

><td id="69"><a href="#69">69</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_70"

><td id="70"><a href="#70">70</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_71"

><td id="71"><a href="#71">71</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_72"

><td id="72"><a href="#72">72</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_73"

><td id="73"><a href="#73">73</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_74"

><td id="74"><a href="#74">74</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_75"

><td id="75"><a href="#75">75</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_76"

><td id="76"><a href="#76">76</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_77"

><td id="77"><a href="#77">77</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_78"

><td id="78"><a href="#78">78</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_79"

><td id="79"><a href="#79">79</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_80"

><td id="80"><a href="#80">80</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_81"

><td id="81"><a href="#81">81</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_82"

><td id="82"><a href="#82">82</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_83"

><td id="83"><a href="#83">83</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_84"

><td id="84"><a href="#84">84</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_85"

><td id="85"><a href="#85">85</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_86"

><td id="86"><a href="#86">86</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_87"

><td id="87"><a href="#87">87</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_88"

><td id="88"><a href="#88">88</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_89"

><td id="89"><a href="#89">89</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_90"

><td id="90"><a href="#90">90</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_91"

><td id="91"><a href="#91">91</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_92"

><td id="92"><a href="#92">92</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_93"

><td id="93"><a href="#93">93</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_94"

><td id="94"><a href="#94">94</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_95"

><td id="95"><a href="#95">95</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_96"

><td id="96"><a href="#96">96</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_97"

><td id="97"><a href="#97">97</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_98"

><td id="98"><a href="#98">98</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_99"

><td id="99"><a href="#99">99</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_100"

><td id="100"><a href="#100">100</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_101"

><td id="101"><a href="#101">101</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_102"

><td id="102"><a href="#102">102</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_103"

><td id="103"><a href="#103">103</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_104"

><td id="104"><a href="#104">104</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_105"

><td id="105"><a href="#105">105</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_106"

><td id="106"><a href="#106">106</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_107"

><td id="107"><a href="#107">107</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_108"

><td id="108"><a href="#108">108</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_109"

><td id="109"><a href="#109">109</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_110"

><td id="110"><a href="#110">110</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_111"

><td id="111"><a href="#111">111</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_112"

><td id="112"><a href="#112">112</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_113"

><td id="113"><a href="#113">113</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_114"

><td id="114"><a href="#114">114</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_115"

><td id="115"><a href="#115">115</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_116"

><td id="116"><a href="#116">116</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_117"

><td id="117"><a href="#117">117</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_118"

><td id="118"><a href="#118">118</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_119"

><td id="119"><a href="#119">119</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_120"

><td id="120"><a href="#120">120</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_121"

><td id="121"><a href="#121">121</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_122"

><td id="122"><a href="#122">122</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_123"

><td id="123"><a href="#123">123</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_124"

><td id="124"><a href="#124">124</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_125"

><td id="125"><a href="#125">125</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_126"

><td id="126"><a href="#126">126</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_127"

><td id="127"><a href="#127">127</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_128"

><td id="128"><a href="#128">128</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_129"

><td id="129"><a href="#129">129</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_130"

><td id="130"><a href="#130">130</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_131"

><td id="131"><a href="#131">131</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_132"

><td id="132"><a href="#132">132</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_133"

><td id="133"><a href="#133">133</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_134"

><td id="134"><a href="#134">134</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_135"

><td id="135"><a href="#135">135</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_136"

><td id="136"><a href="#136">136</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_137"

><td id="137"><a href="#137">137</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_138"

><td id="138"><a href="#138">138</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_139"

><td id="139"><a href="#139">139</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_140"

><td id="140"><a href="#140">140</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_141"

><td id="141"><a href="#141">141</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_142"

><td id="142"><a href="#142">142</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_143"

><td id="143"><a href="#143">143</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_144"

><td id="144"><a href="#144">144</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_145"

><td id="145"><a href="#145">145</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_146"

><td id="146"><a href="#146">146</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_147"

><td id="147"><a href="#147">147</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_148"

><td id="148"><a href="#148">148</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_149"

><td id="149"><a href="#149">149</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_150"

><td id="150"><a href="#150">150</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_151"

><td id="151"><a href="#151">151</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_152"

><td id="152"><a href="#152">152</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_153"

><td id="153"><a href="#153">153</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_154"

><td id="154"><a href="#154">154</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_155"

><td id="155"><a href="#155">155</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_156"

><td id="156"><a href="#156">156</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_157"

><td id="157"><a href="#157">157</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_158"

><td id="158"><a href="#158">158</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_159"

><td id="159"><a href="#159">159</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_160"

><td id="160"><a href="#160">160</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_161"

><td id="161"><a href="#161">161</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_162"

><td id="162"><a href="#162">162</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_163"

><td id="163"><a href="#163">163</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_164"

><td id="164"><a href="#164">164</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_165"

><td id="165"><a href="#165">165</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_166"

><td id="166"><a href="#166">166</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_167"

><td id="167"><a href="#167">167</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_168"

><td id="168"><a href="#168">168</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_169"

><td id="169"><a href="#169">169</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_170"

><td id="170"><a href="#170">170</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_171"

><td id="171"><a href="#171">171</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_172"

><td id="172"><a href="#172">172</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_173"

><td id="173"><a href="#173">173</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_174"

><td id="174"><a href="#174">174</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_175"

><td id="175"><a href="#175">175</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_176"

><td id="176"><a href="#176">176</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_177"

><td id="177"><a href="#177">177</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_178"

><td id="178"><a href="#178">178</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_179"

><td id="179"><a href="#179">179</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_180"

><td id="180"><a href="#180">180</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_181"

><td id="181"><a href="#181">181</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_182"

><td id="182"><a href="#182">182</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_183"

><td id="183"><a href="#183">183</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_184"

><td id="184"><a href="#184">184</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_185"

><td id="185"><a href="#185">185</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_186"

><td id="186"><a href="#186">186</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_187"

><td id="187"><a href="#187">187</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_188"

><td id="188"><a href="#188">188</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_189"

><td id="189"><a href="#189">189</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_190"

><td id="190"><a href="#190">190</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_191"

><td id="191"><a href="#191">191</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_192"

><td id="192"><a href="#192">192</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_193"

><td id="193"><a href="#193">193</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_194"

><td id="194"><a href="#194">194</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_195"

><td id="195"><a href="#195">195</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_196"

><td id="196"><a href="#196">196</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_197"

><td id="197"><a href="#197">197</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_198"

><td id="198"><a href="#198">198</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_199"

><td id="199"><a href="#199">199</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_200"

><td id="200"><a href="#200">200</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_201"

><td id="201"><a href="#201">201</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_202"

><td id="202"><a href="#202">202</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_203"

><td id="203"><a href="#203">203</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_204"

><td id="204"><a href="#204">204</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_205"

><td id="205"><a href="#205">205</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_206"

><td id="206"><a href="#206">206</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_207"

><td id="207"><a href="#207">207</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_208"

><td id="208"><a href="#208">208</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_209"

><td id="209"><a href="#209">209</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_210"

><td id="210"><a href="#210">210</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_211"

><td id="211"><a href="#211">211</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_212"

><td id="212"><a href="#212">212</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_213"

><td id="213"><a href="#213">213</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_214"

><td id="214"><a href="#214">214</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_215"

><td id="215"><a href="#215">215</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_216"

><td id="216"><a href="#216">216</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_217"

><td id="217"><a href="#217">217</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_218"

><td id="218"><a href="#218">218</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_219"

><td id="219"><a href="#219">219</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_220"

><td id="220"><a href="#220">220</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_221"

><td id="221"><a href="#221">221</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_222"

><td id="222"><a href="#222">222</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_223"

><td id="223"><a href="#223">223</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_224"

><td id="224"><a href="#224">224</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_225"

><td id="225"><a href="#225">225</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_226"

><td id="226"><a href="#226">226</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_227"

><td id="227"><a href="#227">227</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_228"

><td id="228"><a href="#228">228</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_229"

><td id="229"><a href="#229">229</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_230"

><td id="230"><a href="#230">230</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_231"

><td id="231"><a href="#231">231</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_232"

><td id="232"><a href="#232">232</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_233"

><td id="233"><a href="#233">233</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_234"

><td id="234"><a href="#234">234</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_235"

><td id="235"><a href="#235">235</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_236"

><td id="236"><a href="#236">236</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_237"

><td id="237"><a href="#237">237</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_238"

><td id="238"><a href="#238">238</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_239"

><td id="239"><a href="#239">239</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_240"

><td id="240"><a href="#240">240</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_241"

><td id="241"><a href="#241">241</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_242"

><td id="242"><a href="#242">242</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_243"

><td id="243"><a href="#243">243</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_244"

><td id="244"><a href="#244">244</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_245"

><td id="245"><a href="#245">245</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_246"

><td id="246"><a href="#246">246</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_247"

><td id="247"><a href="#247">247</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_248"

><td id="248"><a href="#248">248</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_249"

><td id="249"><a href="#249">249</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_250"

><td id="250"><a href="#250">250</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_251"

><td id="251"><a href="#251">251</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_252"

><td id="252"><a href="#252">252</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_253"

><td id="253"><a href="#253">253</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_254"

><td id="254"><a href="#254">254</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_255"

><td id="255"><a href="#255">255</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_256"

><td id="256"><a href="#256">256</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_257"

><td id="257"><a href="#257">257</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_258"

><td id="258"><a href="#258">258</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_259"

><td id="259"><a href="#259">259</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_260"

><td id="260"><a href="#260">260</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_261"

><td id="261"><a href="#261">261</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_262"

><td id="262"><a href="#262">262</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_263"

><td id="263"><a href="#263">263</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_264"

><td id="264"><a href="#264">264</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_265"

><td id="265"><a href="#265">265</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_266"

><td id="266"><a href="#266">266</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_267"

><td id="267"><a href="#267">267</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_268"

><td id="268"><a href="#268">268</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_269"

><td id="269"><a href="#269">269</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_270"

><td id="270"><a href="#270">270</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_271"

><td id="271"><a href="#271">271</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_272"

><td id="272"><a href="#272">272</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_273"

><td id="273"><a href="#273">273</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_274"

><td id="274"><a href="#274">274</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_275"

><td id="275"><a href="#275">275</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_276"

><td id="276"><a href="#276">276</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_277"

><td id="277"><a href="#277">277</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_278"

><td id="278"><a href="#278">278</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_279"

><td id="279"><a href="#279">279</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_280"

><td id="280"><a href="#280">280</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_281"

><td id="281"><a href="#281">281</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_282"

><td id="282"><a href="#282">282</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_283"

><td id="283"><a href="#283">283</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_284"

><td id="284"><a href="#284">284</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_285"

><td id="285"><a href="#285">285</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_286"

><td id="286"><a href="#286">286</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_287"

><td id="287"><a href="#287">287</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_288"

><td id="288"><a href="#288">288</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_289"

><td id="289"><a href="#289">289</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_290"

><td id="290"><a href="#290">290</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_291"

><td id="291"><a href="#291">291</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_292"

><td id="292"><a href="#292">292</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_293"

><td id="293"><a href="#293">293</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_294"

><td id="294"><a href="#294">294</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_295"

><td id="295"><a href="#295">295</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_296"

><td id="296"><a href="#296">296</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_297"

><td id="297"><a href="#297">297</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_298"

><td id="298"><a href="#298">298</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_299"

><td id="299"><a href="#299">299</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_300"

><td id="300"><a href="#300">300</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_301"

><td id="301"><a href="#301">301</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_302"

><td id="302"><a href="#302">302</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_303"

><td id="303"><a href="#303">303</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_304"

><td id="304"><a href="#304">304</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_305"

><td id="305"><a href="#305">305</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_306"

><td id="306"><a href="#306">306</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_307"

><td id="307"><a href="#307">307</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_308"

><td id="308"><a href="#308">308</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_309"

><td id="309"><a href="#309">309</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_310"

><td id="310"><a href="#310">310</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_311"

><td id="311"><a href="#311">311</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_312"

><td id="312"><a href="#312">312</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_313"

><td id="313"><a href="#313">313</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_314"

><td id="314"><a href="#314">314</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_315"

><td id="315"><a href="#315">315</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_316"

><td id="316"><a href="#316">316</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_317"

><td id="317"><a href="#317">317</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_318"

><td id="318"><a href="#318">318</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_319"

><td id="319"><a href="#319">319</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_320"

><td id="320"><a href="#320">320</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_321"

><td id="321"><a href="#321">321</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_322"

><td id="322"><a href="#322">322</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_323"

><td id="323"><a href="#323">323</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_324"

><td id="324"><a href="#324">324</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_325"

><td id="325"><a href="#325">325</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_326"

><td id="326"><a href="#326">326</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_327"

><td id="327"><a href="#327">327</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_328"

><td id="328"><a href="#328">328</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_329"

><td id="329"><a href="#329">329</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_330"

><td id="330"><a href="#330">330</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_331"

><td id="331"><a href="#331">331</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_332"

><td id="332"><a href="#332">332</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_333"

><td id="333"><a href="#333">333</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_334"

><td id="334"><a href="#334">334</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_335"

><td id="335"><a href="#335">335</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_336"

><td id="336"><a href="#336">336</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_337"

><td id="337"><a href="#337">337</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_338"

><td id="338"><a href="#338">338</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_339"

><td id="339"><a href="#339">339</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_340"

><td id="340"><a href="#340">340</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_341"

><td id="341"><a href="#341">341</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_342"

><td id="342"><a href="#342">342</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_343"

><td id="343"><a href="#343">343</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_344"

><td id="344"><a href="#344">344</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_345"

><td id="345"><a href="#345">345</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_346"

><td id="346"><a href="#346">346</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_347"

><td id="347"><a href="#347">347</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_348"

><td id="348"><a href="#348">348</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_349"

><td id="349"><a href="#349">349</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_350"

><td id="350"><a href="#350">350</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_351"

><td id="351"><a href="#351">351</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_352"

><td id="352"><a href="#352">352</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_353"

><td id="353"><a href="#353">353</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_354"

><td id="354"><a href="#354">354</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_355"

><td id="355"><a href="#355">355</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_356"

><td id="356"><a href="#356">356</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_357"

><td id="357"><a href="#357">357</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_358"

><td id="358"><a href="#358">358</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_359"

><td id="359"><a href="#359">359</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_360"

><td id="360"><a href="#360">360</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_361"

><td id="361"><a href="#361">361</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_362"

><td id="362"><a href="#362">362</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_363"

><td id="363"><a href="#363">363</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_364"

><td id="364"><a href="#364">364</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_365"

><td id="365"><a href="#365">365</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_366"

><td id="366"><a href="#366">366</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_367"

><td id="367"><a href="#367">367</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_368"

><td id="368"><a href="#368">368</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_369"

><td id="369"><a href="#369">369</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_370"

><td id="370"><a href="#370">370</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_371"

><td id="371"><a href="#371">371</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_372"

><td id="372"><a href="#372">372</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_373"

><td id="373"><a href="#373">373</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_374"

><td id="374"><a href="#374">374</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_375"

><td id="375"><a href="#375">375</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_376"

><td id="376"><a href="#376">376</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_377"

><td id="377"><a href="#377">377</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_378"

><td id="378"><a href="#378">378</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_379"

><td id="379"><a href="#379">379</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_380"

><td id="380"><a href="#380">380</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_381"

><td id="381"><a href="#381">381</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_382"

><td id="382"><a href="#382">382</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_383"

><td id="383"><a href="#383">383</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_384"

><td id="384"><a href="#384">384</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_385"

><td id="385"><a href="#385">385</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_386"

><td id="386"><a href="#386">386</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_387"

><td id="387"><a href="#387">387</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_388"

><td id="388"><a href="#388">388</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_389"

><td id="389"><a href="#389">389</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_390"

><td id="390"><a href="#390">390</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_391"

><td id="391"><a href="#391">391</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_392"

><td id="392"><a href="#392">392</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_393"

><td id="393"><a href="#393">393</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_394"

><td id="394"><a href="#394">394</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_395"

><td id="395"><a href="#395">395</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_396"

><td id="396"><a href="#396">396</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_397"

><td id="397"><a href="#397">397</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_398"

><td id="398"><a href="#398">398</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_399"

><td id="399"><a href="#399">399</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_400"

><td id="400"><a href="#400">400</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_401"

><td id="401"><a href="#401">401</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_402"

><td id="402"><a href="#402">402</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_403"

><td id="403"><a href="#403">403</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_404"

><td id="404"><a href="#404">404</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_405"

><td id="405"><a href="#405">405</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_406"

><td id="406"><a href="#406">406</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_407"

><td id="407"><a href="#407">407</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_408"

><td id="408"><a href="#408">408</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_409"

><td id="409"><a href="#409">409</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_410"

><td id="410"><a href="#410">410</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_411"

><td id="411"><a href="#411">411</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_412"

><td id="412"><a href="#412">412</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_413"

><td id="413"><a href="#413">413</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_414"

><td id="414"><a href="#414">414</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_415"

><td id="415"><a href="#415">415</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_416"

><td id="416"><a href="#416">416</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_417"

><td id="417"><a href="#417">417</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_418"

><td id="418"><a href="#418">418</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_419"

><td id="419"><a href="#419">419</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_420"

><td id="420"><a href="#420">420</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_421"

><td id="421"><a href="#421">421</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_422"

><td id="422"><a href="#422">422</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_423"

><td id="423"><a href="#423">423</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_424"

><td id="424"><a href="#424">424</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_425"

><td id="425"><a href="#425">425</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_426"

><td id="426"><a href="#426">426</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_427"

><td id="427"><a href="#427">427</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_428"

><td id="428"><a href="#428">428</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_429"

><td id="429"><a href="#429">429</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_430"

><td id="430"><a href="#430">430</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_431"

><td id="431"><a href="#431">431</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_432"

><td id="432"><a href="#432">432</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_433"

><td id="433"><a href="#433">433</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_434"

><td id="434"><a href="#434">434</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_435"

><td id="435"><a href="#435">435</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_436"

><td id="436"><a href="#436">436</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_437"

><td id="437"><a href="#437">437</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_438"

><td id="438"><a href="#438">438</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_439"

><td id="439"><a href="#439">439</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_440"

><td id="440"><a href="#440">440</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_441"

><td id="441"><a href="#441">441</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_442"

><td id="442"><a href="#442">442</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_443"

><td id="443"><a href="#443">443</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_444"

><td id="444"><a href="#444">444</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_445"

><td id="445"><a href="#445">445</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_446"

><td id="446"><a href="#446">446</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_447"

><td id="447"><a href="#447">447</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_448"

><td id="448"><a href="#448">448</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_449"

><td id="449"><a href="#449">449</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_450"

><td id="450"><a href="#450">450</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_451"

><td id="451"><a href="#451">451</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_452"

><td id="452"><a href="#452">452</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_453"

><td id="453"><a href="#453">453</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_454"

><td id="454"><a href="#454">454</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_455"

><td id="455"><a href="#455">455</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_456"

><td id="456"><a href="#456">456</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_457"

><td id="457"><a href="#457">457</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_458"

><td id="458"><a href="#458">458</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_459"

><td id="459"><a href="#459">459</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_460"

><td id="460"><a href="#460">460</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_461"

><td id="461"><a href="#461">461</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_462"

><td id="462"><a href="#462">462</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_463"

><td id="463"><a href="#463">463</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_464"

><td id="464"><a href="#464">464</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_465"

><td id="465"><a href="#465">465</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_466"

><td id="466"><a href="#466">466</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_467"

><td id="467"><a href="#467">467</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_468"

><td id="468"><a href="#468">468</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_469"

><td id="469"><a href="#469">469</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_470"

><td id="470"><a href="#470">470</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_471"

><td id="471"><a href="#471">471</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_472"

><td id="472"><a href="#472">472</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_473"

><td id="473"><a href="#473">473</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_474"

><td id="474"><a href="#474">474</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_475"

><td id="475"><a href="#475">475</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_476"

><td id="476"><a href="#476">476</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_477"

><td id="477"><a href="#477">477</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_478"

><td id="478"><a href="#478">478</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_479"

><td id="479"><a href="#479">479</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_480"

><td id="480"><a href="#480">480</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_481"

><td id="481"><a href="#481">481</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_482"

><td id="482"><a href="#482">482</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_483"

><td id="483"><a href="#483">483</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_484"

><td id="484"><a href="#484">484</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_485"

><td id="485"><a href="#485">485</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_486"

><td id="486"><a href="#486">486</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_487"

><td id="487"><a href="#487">487</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_488"

><td id="488"><a href="#488">488</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_489"

><td id="489"><a href="#489">489</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_490"

><td id="490"><a href="#490">490</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_491"

><td id="491"><a href="#491">491</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_492"

><td id="492"><a href="#492">492</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_493"

><td id="493"><a href="#493">493</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_494"

><td id="494"><a href="#494">494</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_495"

><td id="495"><a href="#495">495</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_496"

><td id="496"><a href="#496">496</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_497"

><td id="497"><a href="#497">497</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_498"

><td id="498"><a href="#498">498</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_499"

><td id="499"><a href="#499">499</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_500"

><td id="500"><a href="#500">500</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_501"

><td id="501"><a href="#501">501</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_502"

><td id="502"><a href="#502">502</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_503"

><td id="503"><a href="#503">503</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_504"

><td id="504"><a href="#504">504</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_505"

><td id="505"><a href="#505">505</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_506"

><td id="506"><a href="#506">506</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_507"

><td id="507"><a href="#507">507</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_508"

><td id="508"><a href="#508">508</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_509"

><td id="509"><a href="#509">509</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_510"

><td id="510"><a href="#510">510</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_511"

><td id="511"><a href="#511">511</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_512"

><td id="512"><a href="#512">512</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_513"

><td id="513"><a href="#513">513</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_514"

><td id="514"><a href="#514">514</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_515"

><td id="515"><a href="#515">515</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_516"

><td id="516"><a href="#516">516</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_517"

><td id="517"><a href="#517">517</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_518"

><td id="518"><a href="#518">518</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_519"

><td id="519"><a href="#519">519</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_520"

><td id="520"><a href="#520">520</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_521"

><td id="521"><a href="#521">521</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_522"

><td id="522"><a href="#522">522</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_523"

><td id="523"><a href="#523">523</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_524"

><td id="524"><a href="#524">524</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_525"

><td id="525"><a href="#525">525</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_526"

><td id="526"><a href="#526">526</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_527"

><td id="527"><a href="#527">527</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_528"

><td id="528"><a href="#528">528</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_529"

><td id="529"><a href="#529">529</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_530"

><td id="530"><a href="#530">530</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_531"

><td id="531"><a href="#531">531</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_532"

><td id="532"><a href="#532">532</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_533"

><td id="533"><a href="#533">533</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_534"

><td id="534"><a href="#534">534</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_535"

><td id="535"><a href="#535">535</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_536"

><td id="536"><a href="#536">536</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_537"

><td id="537"><a href="#537">537</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_538"

><td id="538"><a href="#538">538</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_539"

><td id="539"><a href="#539">539</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_540"

><td id="540"><a href="#540">540</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_541"

><td id="541"><a href="#541">541</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_542"

><td id="542"><a href="#542">542</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_543"

><td id="543"><a href="#543">543</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_544"

><td id="544"><a href="#544">544</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_545"

><td id="545"><a href="#545">545</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_546"

><td id="546"><a href="#546">546</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_547"

><td id="547"><a href="#547">547</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_548"

><td id="548"><a href="#548">548</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_549"

><td id="549"><a href="#549">549</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_550"

><td id="550"><a href="#550">550</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_551"

><td id="551"><a href="#551">551</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_552"

><td id="552"><a href="#552">552</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_553"

><td id="553"><a href="#553">553</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_554"

><td id="554"><a href="#554">554</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_555"

><td id="555"><a href="#555">555</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_556"

><td id="556"><a href="#556">556</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_557"

><td id="557"><a href="#557">557</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_558"

><td id="558"><a href="#558">558</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_559"

><td id="559"><a href="#559">559</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_560"

><td id="560"><a href="#560">560</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_561"

><td id="561"><a href="#561">561</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_562"

><td id="562"><a href="#562">562</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_563"

><td id="563"><a href="#563">563</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_564"

><td id="564"><a href="#564">564</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_565"

><td id="565"><a href="#565">565</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_566"

><td id="566"><a href="#566">566</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_567"

><td id="567"><a href="#567">567</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_568"

><td id="568"><a href="#568">568</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_569"

><td id="569"><a href="#569">569</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_570"

><td id="570"><a href="#570">570</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_571"

><td id="571"><a href="#571">571</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_572"

><td id="572"><a href="#572">572</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_573"

><td id="573"><a href="#573">573</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_574"

><td id="574"><a href="#574">574</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_575"

><td id="575"><a href="#575">575</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_576"

><td id="576"><a href="#576">576</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_577"

><td id="577"><a href="#577">577</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_578"

><td id="578"><a href="#578">578</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_579"

><td id="579"><a href="#579">579</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_580"

><td id="580"><a href="#580">580</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_581"

><td id="581"><a href="#581">581</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_582"

><td id="582"><a href="#582">582</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_583"

><td id="583"><a href="#583">583</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_584"

><td id="584"><a href="#584">584</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_585"

><td id="585"><a href="#585">585</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_586"

><td id="586"><a href="#586">586</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_587"

><td id="587"><a href="#587">587</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_588"

><td id="588"><a href="#588">588</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_589"

><td id="589"><a href="#589">589</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_590"

><td id="590"><a href="#590">590</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_591"

><td id="591"><a href="#591">591</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_592"

><td id="592"><a href="#592">592</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_593"

><td id="593"><a href="#593">593</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_594"

><td id="594"><a href="#594">594</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_595"

><td id="595"><a href="#595">595</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_596"

><td id="596"><a href="#596">596</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_597"

><td id="597"><a href="#597">597</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_598"

><td id="598"><a href="#598">598</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_599"

><td id="599"><a href="#599">599</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_600"

><td id="600"><a href="#600">600</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_601"

><td id="601"><a href="#601">601</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_602"

><td id="602"><a href="#602">602</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_603"

><td id="603"><a href="#603">603</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_604"

><td id="604"><a href="#604">604</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_605"

><td id="605"><a href="#605">605</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_606"

><td id="606"><a href="#606">606</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_607"

><td id="607"><a href="#607">607</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_608"

><td id="608"><a href="#608">608</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_609"

><td id="609"><a href="#609">609</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_610"

><td id="610"><a href="#610">610</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_611"

><td id="611"><a href="#611">611</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_612"

><td id="612"><a href="#612">612</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_613"

><td id="613"><a href="#613">613</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_614"

><td id="614"><a href="#614">614</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_615"

><td id="615"><a href="#615">615</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_616"

><td id="616"><a href="#616">616</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_617"

><td id="617"><a href="#617">617</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_618"

><td id="618"><a href="#618">618</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_619"

><td id="619"><a href="#619">619</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_620"

><td id="620"><a href="#620">620</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_621"

><td id="621"><a href="#621">621</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_622"

><td id="622"><a href="#622">622</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_623"

><td id="623"><a href="#623">623</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_624"

><td id="624"><a href="#624">624</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_625"

><td id="625"><a href="#625">625</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_626"

><td id="626"><a href="#626">626</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_627"

><td id="627"><a href="#627">627</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_628"

><td id="628"><a href="#628">628</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_629"

><td id="629"><a href="#629">629</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_630"

><td id="630"><a href="#630">630</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_631"

><td id="631"><a href="#631">631</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_632"

><td id="632"><a href="#632">632</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_633"

><td id="633"><a href="#633">633</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_634"

><td id="634"><a href="#634">634</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_635"

><td id="635"><a href="#635">635</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_636"

><td id="636"><a href="#636">636</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_637"

><td id="637"><a href="#637">637</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_638"

><td id="638"><a href="#638">638</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_639"

><td id="639"><a href="#639">639</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_640"

><td id="640"><a href="#640">640</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_641"

><td id="641"><a href="#641">641</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_642"

><td id="642"><a href="#642">642</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_643"

><td id="643"><a href="#643">643</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_644"

><td id="644"><a href="#644">644</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_645"

><td id="645"><a href="#645">645</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_646"

><td id="646"><a href="#646">646</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_647"

><td id="647"><a href="#647">647</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_648"

><td id="648"><a href="#648">648</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_649"

><td id="649"><a href="#649">649</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_650"

><td id="650"><a href="#650">650</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_651"

><td id="651"><a href="#651">651</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_652"

><td id="652"><a href="#652">652</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_653"

><td id="653"><a href="#653">653</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_654"

><td id="654"><a href="#654">654</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_655"

><td id="655"><a href="#655">655</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_656"

><td id="656"><a href="#656">656</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_657"

><td id="657"><a href="#657">657</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_658"

><td id="658"><a href="#658">658</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_659"

><td id="659"><a href="#659">659</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_660"

><td id="660"><a href="#660">660</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_661"

><td id="661"><a href="#661">661</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_662"

><td id="662"><a href="#662">662</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_663"

><td id="663"><a href="#663">663</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_664"

><td id="664"><a href="#664">664</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_665"

><td id="665"><a href="#665">665</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_666"

><td id="666"><a href="#666">666</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_667"

><td id="667"><a href="#667">667</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_668"

><td id="668"><a href="#668">668</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_669"

><td id="669"><a href="#669">669</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_670"

><td id="670"><a href="#670">670</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_671"

><td id="671"><a href="#671">671</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_672"

><td id="672"><a href="#672">672</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_673"

><td id="673"><a href="#673">673</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_674"

><td id="674"><a href="#674">674</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_675"

><td id="675"><a href="#675">675</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_676"

><td id="676"><a href="#676">676</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_677"

><td id="677"><a href="#677">677</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_678"

><td id="678"><a href="#678">678</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_679"

><td id="679"><a href="#679">679</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_680"

><td id="680"><a href="#680">680</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_681"

><td id="681"><a href="#681">681</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_682"

><td id="682"><a href="#682">682</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_683"

><td id="683"><a href="#683">683</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_684"

><td id="684"><a href="#684">684</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_685"

><td id="685"><a href="#685">685</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_686"

><td id="686"><a href="#686">686</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_687"

><td id="687"><a href="#687">687</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_688"

><td id="688"><a href="#688">688</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_689"

><td id="689"><a href="#689">689</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_690"

><td id="690"><a href="#690">690</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_691"

><td id="691"><a href="#691">691</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_692"

><td id="692"><a href="#692">692</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_693"

><td id="693"><a href="#693">693</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_694"

><td id="694"><a href="#694">694</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_695"

><td id="695"><a href="#695">695</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_696"

><td id="696"><a href="#696">696</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_697"

><td id="697"><a href="#697">697</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_698"

><td id="698"><a href="#698">698</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_699"

><td id="699"><a href="#699">699</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_700"

><td id="700"><a href="#700">700</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_701"

><td id="701"><a href="#701">701</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_702"

><td id="702"><a href="#702">702</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_703"

><td id="703"><a href="#703">703</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_704"

><td id="704"><a href="#704">704</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_705"

><td id="705"><a href="#705">705</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_706"

><td id="706"><a href="#706">706</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_707"

><td id="707"><a href="#707">707</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_708"

><td id="708"><a href="#708">708</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_709"

><td id="709"><a href="#709">709</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_710"

><td id="710"><a href="#710">710</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_711"

><td id="711"><a href="#711">711</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_712"

><td id="712"><a href="#712">712</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_713"

><td id="713"><a href="#713">713</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_714"

><td id="714"><a href="#714">714</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_715"

><td id="715"><a href="#715">715</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_716"

><td id="716"><a href="#716">716</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_717"

><td id="717"><a href="#717">717</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_718"

><td id="718"><a href="#718">718</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_719"

><td id="719"><a href="#719">719</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_720"

><td id="720"><a href="#720">720</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_721"

><td id="721"><a href="#721">721</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_722"

><td id="722"><a href="#722">722</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_723"

><td id="723"><a href="#723">723</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_724"

><td id="724"><a href="#724">724</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_725"

><td id="725"><a href="#725">725</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_726"

><td id="726"><a href="#726">726</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_727"

><td id="727"><a href="#727">727</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_728"

><td id="728"><a href="#728">728</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_729"

><td id="729"><a href="#729">729</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_730"

><td id="730"><a href="#730">730</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_731"

><td id="731"><a href="#731">731</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_732"

><td id="732"><a href="#732">732</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_733"

><td id="733"><a href="#733">733</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_734"

><td id="734"><a href="#734">734</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_735"

><td id="735"><a href="#735">735</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_736"

><td id="736"><a href="#736">736</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_737"

><td id="737"><a href="#737">737</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_738"

><td id="738"><a href="#738">738</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_739"

><td id="739"><a href="#739">739</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_740"

><td id="740"><a href="#740">740</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_741"

><td id="741"><a href="#741">741</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_742"

><td id="742"><a href="#742">742</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_743"

><td id="743"><a href="#743">743</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_744"

><td id="744"><a href="#744">744</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_745"

><td id="745"><a href="#745">745</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_746"

><td id="746"><a href="#746">746</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_747"

><td id="747"><a href="#747">747</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_748"

><td id="748"><a href="#748">748</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_749"

><td id="749"><a href="#749">749</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_750"

><td id="750"><a href="#750">750</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_751"

><td id="751"><a href="#751">751</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_752"

><td id="752"><a href="#752">752</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_753"

><td id="753"><a href="#753">753</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_754"

><td id="754"><a href="#754">754</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_755"

><td id="755"><a href="#755">755</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_756"

><td id="756"><a href="#756">756</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_757"

><td id="757"><a href="#757">757</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_758"

><td id="758"><a href="#758">758</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_759"

><td id="759"><a href="#759">759</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_760"

><td id="760"><a href="#760">760</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_761"

><td id="761"><a href="#761">761</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_762"

><td id="762"><a href="#762">762</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_763"

><td id="763"><a href="#763">763</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_764"

><td id="764"><a href="#764">764</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_765"

><td id="765"><a href="#765">765</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_766"

><td id="766"><a href="#766">766</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_767"

><td id="767"><a href="#767">767</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_768"

><td id="768"><a href="#768">768</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_769"

><td id="769"><a href="#769">769</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_770"

><td id="770"><a href="#770">770</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_771"

><td id="771"><a href="#771">771</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_772"

><td id="772"><a href="#772">772</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_773"

><td id="773"><a href="#773">773</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_774"

><td id="774"><a href="#774">774</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_775"

><td id="775"><a href="#775">775</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_776"

><td id="776"><a href="#776">776</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_777"

><td id="777"><a href="#777">777</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_778"

><td id="778"><a href="#778">778</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_779"

><td id="779"><a href="#779">779</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_780"

><td id="780"><a href="#780">780</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_781"

><td id="781"><a href="#781">781</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_782"

><td id="782"><a href="#782">782</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_783"

><td id="783"><a href="#783">783</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_784"

><td id="784"><a href="#784">784</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_785"

><td id="785"><a href="#785">785</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_786"

><td id="786"><a href="#786">786</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_787"

><td id="787"><a href="#787">787</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_788"

><td id="788"><a href="#788">788</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_789"

><td id="789"><a href="#789">789</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_790"

><td id="790"><a href="#790">790</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_791"

><td id="791"><a href="#791">791</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_792"

><td id="792"><a href="#792">792</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_793"

><td id="793"><a href="#793">793</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_794"

><td id="794"><a href="#794">794</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_795"

><td id="795"><a href="#795">795</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_796"

><td id="796"><a href="#796">796</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_797"

><td id="797"><a href="#797">797</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_798"

><td id="798"><a href="#798">798</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_799"

><td id="799"><a href="#799">799</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_800"

><td id="800"><a href="#800">800</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_801"

><td id="801"><a href="#801">801</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_802"

><td id="802"><a href="#802">802</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_803"

><td id="803"><a href="#803">803</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_804"

><td id="804"><a href="#804">804</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_805"

><td id="805"><a href="#805">805</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_806"

><td id="806"><a href="#806">806</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_807"

><td id="807"><a href="#807">807</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_808"

><td id="808"><a href="#808">808</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_809"

><td id="809"><a href="#809">809</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_810"

><td id="810"><a href="#810">810</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_811"

><td id="811"><a href="#811">811</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_812"

><td id="812"><a href="#812">812</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_813"

><td id="813"><a href="#813">813</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_814"

><td id="814"><a href="#814">814</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_815"

><td id="815"><a href="#815">815</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_816"

><td id="816"><a href="#816">816</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_817"

><td id="817"><a href="#817">817</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_818"

><td id="818"><a href="#818">818</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_819"

><td id="819"><a href="#819">819</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_820"

><td id="820"><a href="#820">820</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_821"

><td id="821"><a href="#821">821</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_822"

><td id="822"><a href="#822">822</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_823"

><td id="823"><a href="#823">823</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_824"

><td id="824"><a href="#824">824</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_825"

><td id="825"><a href="#825">825</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_826"

><td id="826"><a href="#826">826</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_827"

><td id="827"><a href="#827">827</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_828"

><td id="828"><a href="#828">828</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_829"

><td id="829"><a href="#829">829</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_830"

><td id="830"><a href="#830">830</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_831"

><td id="831"><a href="#831">831</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_832"

><td id="832"><a href="#832">832</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_833"

><td id="833"><a href="#833">833</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_834"

><td id="834"><a href="#834">834</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_835"

><td id="835"><a href="#835">835</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_836"

><td id="836"><a href="#836">836</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_837"

><td id="837"><a href="#837">837</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_838"

><td id="838"><a href="#838">838</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_839"

><td id="839"><a href="#839">839</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_840"

><td id="840"><a href="#840">840</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_841"

><td id="841"><a href="#841">841</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_842"

><td id="842"><a href="#842">842</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_843"

><td id="843"><a href="#843">843</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_844"

><td id="844"><a href="#844">844</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_845"

><td id="845"><a href="#845">845</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_846"

><td id="846"><a href="#846">846</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_847"

><td id="847"><a href="#847">847</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_848"

><td id="848"><a href="#848">848</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_849"

><td id="849"><a href="#849">849</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_850"

><td id="850"><a href="#850">850</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_851"

><td id="851"><a href="#851">851</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_852"

><td id="852"><a href="#852">852</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_853"

><td id="853"><a href="#853">853</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_854"

><td id="854"><a href="#854">854</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_855"

><td id="855"><a href="#855">855</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_856"

><td id="856"><a href="#856">856</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_857"

><td id="857"><a href="#857">857</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_858"

><td id="858"><a href="#858">858</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_859"

><td id="859"><a href="#859">859</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_860"

><td id="860"><a href="#860">860</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_861"

><td id="861"><a href="#861">861</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_862"

><td id="862"><a href="#862">862</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_863"

><td id="863"><a href="#863">863</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_864"

><td id="864"><a href="#864">864</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_865"

><td id="865"><a href="#865">865</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_866"

><td id="866"><a href="#866">866</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_867"

><td id="867"><a href="#867">867</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_868"

><td id="868"><a href="#868">868</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_869"

><td id="869"><a href="#869">869</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_870"

><td id="870"><a href="#870">870</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_871"

><td id="871"><a href="#871">871</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_872"

><td id="872"><a href="#872">872</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_873"

><td id="873"><a href="#873">873</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_874"

><td id="874"><a href="#874">874</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_875"

><td id="875"><a href="#875">875</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_876"

><td id="876"><a href="#876">876</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_877"

><td id="877"><a href="#877">877</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_878"

><td id="878"><a href="#878">878</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_879"

><td id="879"><a href="#879">879</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_880"

><td id="880"><a href="#880">880</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_881"

><td id="881"><a href="#881">881</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_882"

><td id="882"><a href="#882">882</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_883"

><td id="883"><a href="#883">883</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_884"

><td id="884"><a href="#884">884</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_885"

><td id="885"><a href="#885">885</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_886"

><td id="886"><a href="#886">886</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_887"

><td id="887"><a href="#887">887</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_888"

><td id="888"><a href="#888">888</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_889"

><td id="889"><a href="#889">889</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_890"

><td id="890"><a href="#890">890</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_891"

><td id="891"><a href="#891">891</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_892"

><td id="892"><a href="#892">892</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_893"

><td id="893"><a href="#893">893</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_894"

><td id="894"><a href="#894">894</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_895"

><td id="895"><a href="#895">895</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_896"

><td id="896"><a href="#896">896</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_897"

><td id="897"><a href="#897">897</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_898"

><td id="898"><a href="#898">898</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_899"

><td id="899"><a href="#899">899</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_900"

><td id="900"><a href="#900">900</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_901"

><td id="901"><a href="#901">901</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_902"

><td id="902"><a href="#902">902</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_903"

><td id="903"><a href="#903">903</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_904"

><td id="904"><a href="#904">904</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_905"

><td id="905"><a href="#905">905</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_906"

><td id="906"><a href="#906">906</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_907"

><td id="907"><a href="#907">907</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_908"

><td id="908"><a href="#908">908</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_909"

><td id="909"><a href="#909">909</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_910"

><td id="910"><a href="#910">910</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_911"

><td id="911"><a href="#911">911</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_912"

><td id="912"><a href="#912">912</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_913"

><td id="913"><a href="#913">913</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_914"

><td id="914"><a href="#914">914</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_915"

><td id="915"><a href="#915">915</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_916"

><td id="916"><a href="#916">916</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_917"

><td id="917"><a href="#917">917</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_918"

><td id="918"><a href="#918">918</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_919"

><td id="919"><a href="#919">919</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_920"

><td id="920"><a href="#920">920</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_921"

><td id="921"><a href="#921">921</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_922"

><td id="922"><a href="#922">922</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_923"

><td id="923"><a href="#923">923</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_924"

><td id="924"><a href="#924">924</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_925"

><td id="925"><a href="#925">925</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_926"

><td id="926"><a href="#926">926</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_927"

><td id="927"><a href="#927">927</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_928"

><td id="928"><a href="#928">928</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_929"

><td id="929"><a href="#929">929</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_930"

><td id="930"><a href="#930">930</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_931"

><td id="931"><a href="#931">931</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_932"

><td id="932"><a href="#932">932</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_933"

><td id="933"><a href="#933">933</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_934"

><td id="934"><a href="#934">934</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_935"

><td id="935"><a href="#935">935</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_936"

><td id="936"><a href="#936">936</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_937"

><td id="937"><a href="#937">937</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_938"

><td id="938"><a href="#938">938</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_939"

><td id="939"><a href="#939">939</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_940"

><td id="940"><a href="#940">940</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_941"

><td id="941"><a href="#941">941</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_942"

><td id="942"><a href="#942">942</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_943"

><td id="943"><a href="#943">943</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_944"

><td id="944"><a href="#944">944</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_945"

><td id="945"><a href="#945">945</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_946"

><td id="946"><a href="#946">946</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_947"

><td id="947"><a href="#947">947</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_948"

><td id="948"><a href="#948">948</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_949"

><td id="949"><a href="#949">949</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_950"

><td id="950"><a href="#950">950</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_951"

><td id="951"><a href="#951">951</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_952"

><td id="952"><a href="#952">952</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_953"

><td id="953"><a href="#953">953</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_954"

><td id="954"><a href="#954">954</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_955"

><td id="955"><a href="#955">955</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_956"

><td id="956"><a href="#956">956</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_957"

><td id="957"><a href="#957">957</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_958"

><td id="958"><a href="#958">958</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_959"

><td id="959"><a href="#959">959</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_960"

><td id="960"><a href="#960">960</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_961"

><td id="961"><a href="#961">961</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_962"

><td id="962"><a href="#962">962</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_963"

><td id="963"><a href="#963">963</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_964"

><td id="964"><a href="#964">964</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_965"

><td id="965"><a href="#965">965</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_966"

><td id="966"><a href="#966">966</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_967"

><td id="967"><a href="#967">967</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_968"

><td id="968"><a href="#968">968</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_969"

><td id="969"><a href="#969">969</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_970"

><td id="970"><a href="#970">970</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_971"

><td id="971"><a href="#971">971</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_972"

><td id="972"><a href="#972">972</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_973"

><td id="973"><a href="#973">973</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_974"

><td id="974"><a href="#974">974</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_975"

><td id="975"><a href="#975">975</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_976"

><td id="976"><a href="#976">976</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_977"

><td id="977"><a href="#977">977</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_978"

><td id="978"><a href="#978">978</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_979"

><td id="979"><a href="#979">979</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_980"

><td id="980"><a href="#980">980</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_981"

><td id="981"><a href="#981">981</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_982"

><td id="982"><a href="#982">982</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_983"

><td id="983"><a href="#983">983</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_984"

><td id="984"><a href="#984">984</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_985"

><td id="985"><a href="#985">985</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_986"

><td id="986"><a href="#986">986</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_987"

><td id="987"><a href="#987">987</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_988"

><td id="988"><a href="#988">988</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_989"

><td id="989"><a href="#989">989</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_990"

><td id="990"><a href="#990">990</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_991"

><td id="991"><a href="#991">991</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_992"

><td id="992"><a href="#992">992</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_993"

><td id="993"><a href="#993">993</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_994"

><td id="994"><a href="#994">994</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_995"

><td id="995"><a href="#995">995</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_996"

><td id="996"><a href="#996">996</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_997"

><td id="997"><a href="#997">997</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_998"

><td id="998"><a href="#998">998</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_999"

><td id="999"><a href="#999">999</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1000"

><td id="1000"><a href="#1000">1000</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1001"

><td id="1001"><a href="#1001">1001</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1002"

><td id="1002"><a href="#1002">1002</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1003"

><td id="1003"><a href="#1003">1003</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1004"

><td id="1004"><a href="#1004">1004</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1005"

><td id="1005"><a href="#1005">1005</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1006"

><td id="1006"><a href="#1006">1006</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1007"

><td id="1007"><a href="#1007">1007</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1008"

><td id="1008"><a href="#1008">1008</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1009"

><td id="1009"><a href="#1009">1009</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1010"

><td id="1010"><a href="#1010">1010</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1011"

><td id="1011"><a href="#1011">1011</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1012"

><td id="1012"><a href="#1012">1012</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1013"

><td id="1013"><a href="#1013">1013</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1014"

><td id="1014"><a href="#1014">1014</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1015"

><td id="1015"><a href="#1015">1015</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1016"

><td id="1016"><a href="#1016">1016</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1017"

><td id="1017"><a href="#1017">1017</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1018"

><td id="1018"><a href="#1018">1018</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1019"

><td id="1019"><a href="#1019">1019</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1020"

><td id="1020"><a href="#1020">1020</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1021"

><td id="1021"><a href="#1021">1021</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1022"

><td id="1022"><a href="#1022">1022</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1023"

><td id="1023"><a href="#1023">1023</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1024"

><td id="1024"><a href="#1024">1024</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1025"

><td id="1025"><a href="#1025">1025</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1026"

><td id="1026"><a href="#1026">1026</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1027"

><td id="1027"><a href="#1027">1027</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1028"

><td id="1028"><a href="#1028">1028</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1029"

><td id="1029"><a href="#1029">1029</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1030"

><td id="1030"><a href="#1030">1030</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1031"

><td id="1031"><a href="#1031">1031</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1032"

><td id="1032"><a href="#1032">1032</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1033"

><td id="1033"><a href="#1033">1033</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1034"

><td id="1034"><a href="#1034">1034</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1035"

><td id="1035"><a href="#1035">1035</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1036"

><td id="1036"><a href="#1036">1036</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1037"

><td id="1037"><a href="#1037">1037</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1038"

><td id="1038"><a href="#1038">1038</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1039"

><td id="1039"><a href="#1039">1039</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1040"

><td id="1040"><a href="#1040">1040</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1041"

><td id="1041"><a href="#1041">1041</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1042"

><td id="1042"><a href="#1042">1042</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1043"

><td id="1043"><a href="#1043">1043</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1044"

><td id="1044"><a href="#1044">1044</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1045"

><td id="1045"><a href="#1045">1045</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1046"

><td id="1046"><a href="#1046">1046</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1047"

><td id="1047"><a href="#1047">1047</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1048"

><td id="1048"><a href="#1048">1048</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1049"

><td id="1049"><a href="#1049">1049</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1050"

><td id="1050"><a href="#1050">1050</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1051"

><td id="1051"><a href="#1051">1051</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1052"

><td id="1052"><a href="#1052">1052</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1053"

><td id="1053"><a href="#1053">1053</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1054"

><td id="1054"><a href="#1054">1054</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1055"

><td id="1055"><a href="#1055">1055</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1056"

><td id="1056"><a href="#1056">1056</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1057"

><td id="1057"><a href="#1057">1057</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1058"

><td id="1058"><a href="#1058">1058</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1059"

><td id="1059"><a href="#1059">1059</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1060"

><td id="1060"><a href="#1060">1060</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1061"

><td id="1061"><a href="#1061">1061</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1062"

><td id="1062"><a href="#1062">1062</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1063"

><td id="1063"><a href="#1063">1063</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1064"

><td id="1064"><a href="#1064">1064</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1065"

><td id="1065"><a href="#1065">1065</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1066"

><td id="1066"><a href="#1066">1066</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1067"

><td id="1067"><a href="#1067">1067</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1068"

><td id="1068"><a href="#1068">1068</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1069"

><td id="1069"><a href="#1069">1069</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1070"

><td id="1070"><a href="#1070">1070</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1071"

><td id="1071"><a href="#1071">1071</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1072"

><td id="1072"><a href="#1072">1072</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1073"

><td id="1073"><a href="#1073">1073</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1074"

><td id="1074"><a href="#1074">1074</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1075"

><td id="1075"><a href="#1075">1075</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1076"

><td id="1076"><a href="#1076">1076</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1077"

><td id="1077"><a href="#1077">1077</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1078"

><td id="1078"><a href="#1078">1078</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1079"

><td id="1079"><a href="#1079">1079</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1080"

><td id="1080"><a href="#1080">1080</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1081"

><td id="1081"><a href="#1081">1081</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1082"

><td id="1082"><a href="#1082">1082</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1083"

><td id="1083"><a href="#1083">1083</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1084"

><td id="1084"><a href="#1084">1084</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1085"

><td id="1085"><a href="#1085">1085</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1086"

><td id="1086"><a href="#1086">1086</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1087"

><td id="1087"><a href="#1087">1087</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1088"

><td id="1088"><a href="#1088">1088</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1089"

><td id="1089"><a href="#1089">1089</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1090"

><td id="1090"><a href="#1090">1090</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1091"

><td id="1091"><a href="#1091">1091</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1092"

><td id="1092"><a href="#1092">1092</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1093"

><td id="1093"><a href="#1093">1093</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1094"

><td id="1094"><a href="#1094">1094</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1095"

><td id="1095"><a href="#1095">1095</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1096"

><td id="1096"><a href="#1096">1096</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1097"

><td id="1097"><a href="#1097">1097</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1098"

><td id="1098"><a href="#1098">1098</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1099"

><td id="1099"><a href="#1099">1099</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1100"

><td id="1100"><a href="#1100">1100</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1101"

><td id="1101"><a href="#1101">1101</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1102"

><td id="1102"><a href="#1102">1102</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1103"

><td id="1103"><a href="#1103">1103</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1104"

><td id="1104"><a href="#1104">1104</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1105"

><td id="1105"><a href="#1105">1105</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1106"

><td id="1106"><a href="#1106">1106</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1107"

><td id="1107"><a href="#1107">1107</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1108"

><td id="1108"><a href="#1108">1108</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1109"

><td id="1109"><a href="#1109">1109</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1110"

><td id="1110"><a href="#1110">1110</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1111"

><td id="1111"><a href="#1111">1111</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1112"

><td id="1112"><a href="#1112">1112</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1113"

><td id="1113"><a href="#1113">1113</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1114"

><td id="1114"><a href="#1114">1114</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1115"

><td id="1115"><a href="#1115">1115</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1116"

><td id="1116"><a href="#1116">1116</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1117"

><td id="1117"><a href="#1117">1117</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1118"

><td id="1118"><a href="#1118">1118</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1119"

><td id="1119"><a href="#1119">1119</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1120"

><td id="1120"><a href="#1120">1120</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1121"

><td id="1121"><a href="#1121">1121</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1122"

><td id="1122"><a href="#1122">1122</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1123"

><td id="1123"><a href="#1123">1123</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1124"

><td id="1124"><a href="#1124">1124</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1125"

><td id="1125"><a href="#1125">1125</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1126"

><td id="1126"><a href="#1126">1126</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1127"

><td id="1127"><a href="#1127">1127</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1128"

><td id="1128"><a href="#1128">1128</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1129"

><td id="1129"><a href="#1129">1129</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1130"

><td id="1130"><a href="#1130">1130</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1131"

><td id="1131"><a href="#1131">1131</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1132"

><td id="1132"><a href="#1132">1132</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1133"

><td id="1133"><a href="#1133">1133</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1134"

><td id="1134"><a href="#1134">1134</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1135"

><td id="1135"><a href="#1135">1135</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1136"

><td id="1136"><a href="#1136">1136</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1137"

><td id="1137"><a href="#1137">1137</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1138"

><td id="1138"><a href="#1138">1138</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1139"

><td id="1139"><a href="#1139">1139</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1140"

><td id="1140"><a href="#1140">1140</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1141"

><td id="1141"><a href="#1141">1141</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1142"

><td id="1142"><a href="#1142">1142</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1143"

><td id="1143"><a href="#1143">1143</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1144"

><td id="1144"><a href="#1144">1144</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1145"

><td id="1145"><a href="#1145">1145</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1146"

><td id="1146"><a href="#1146">1146</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1147"

><td id="1147"><a href="#1147">1147</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1148"

><td id="1148"><a href="#1148">1148</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1149"

><td id="1149"><a href="#1149">1149</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1150"

><td id="1150"><a href="#1150">1150</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1151"

><td id="1151"><a href="#1151">1151</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1152"

><td id="1152"><a href="#1152">1152</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1153"

><td id="1153"><a href="#1153">1153</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1154"

><td id="1154"><a href="#1154">1154</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1155"

><td id="1155"><a href="#1155">1155</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1156"

><td id="1156"><a href="#1156">1156</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1157"

><td id="1157"><a href="#1157">1157</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1158"

><td id="1158"><a href="#1158">1158</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1159"

><td id="1159"><a href="#1159">1159</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1160"

><td id="1160"><a href="#1160">1160</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1161"

><td id="1161"><a href="#1161">1161</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1162"

><td id="1162"><a href="#1162">1162</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1163"

><td id="1163"><a href="#1163">1163</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1164"

><td id="1164"><a href="#1164">1164</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1165"

><td id="1165"><a href="#1165">1165</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1166"

><td id="1166"><a href="#1166">1166</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1167"

><td id="1167"><a href="#1167">1167</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1168"

><td id="1168"><a href="#1168">1168</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1169"

><td id="1169"><a href="#1169">1169</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1170"

><td id="1170"><a href="#1170">1170</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1171"

><td id="1171"><a href="#1171">1171</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1172"

><td id="1172"><a href="#1172">1172</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1173"

><td id="1173"><a href="#1173">1173</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1174"

><td id="1174"><a href="#1174">1174</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1175"

><td id="1175"><a href="#1175">1175</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1176"

><td id="1176"><a href="#1176">1176</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1177"

><td id="1177"><a href="#1177">1177</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1178"

><td id="1178"><a href="#1178">1178</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1179"

><td id="1179"><a href="#1179">1179</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1180"

><td id="1180"><a href="#1180">1180</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1181"

><td id="1181"><a href="#1181">1181</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1182"

><td id="1182"><a href="#1182">1182</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1183"

><td id="1183"><a href="#1183">1183</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1184"

><td id="1184"><a href="#1184">1184</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1185"

><td id="1185"><a href="#1185">1185</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1186"

><td id="1186"><a href="#1186">1186</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1187"

><td id="1187"><a href="#1187">1187</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1188"

><td id="1188"><a href="#1188">1188</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1189"

><td id="1189"><a href="#1189">1189</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1190"

><td id="1190"><a href="#1190">1190</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1191"

><td id="1191"><a href="#1191">1191</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1192"

><td id="1192"><a href="#1192">1192</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1193"

><td id="1193"><a href="#1193">1193</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1194"

><td id="1194"><a href="#1194">1194</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1195"

><td id="1195"><a href="#1195">1195</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1196"

><td id="1196"><a href="#1196">1196</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1197"

><td id="1197"><a href="#1197">1197</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1198"

><td id="1198"><a href="#1198">1198</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1199"

><td id="1199"><a href="#1199">1199</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1200"

><td id="1200"><a href="#1200">1200</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1201"

><td id="1201"><a href="#1201">1201</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1202"

><td id="1202"><a href="#1202">1202</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1203"

><td id="1203"><a href="#1203">1203</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1204"

><td id="1204"><a href="#1204">1204</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1205"

><td id="1205"><a href="#1205">1205</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1206"

><td id="1206"><a href="#1206">1206</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1207"

><td id="1207"><a href="#1207">1207</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1208"

><td id="1208"><a href="#1208">1208</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1209"

><td id="1209"><a href="#1209">1209</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1210"

><td id="1210"><a href="#1210">1210</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1211"

><td id="1211"><a href="#1211">1211</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1212"

><td id="1212"><a href="#1212">1212</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1213"

><td id="1213"><a href="#1213">1213</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1214"

><td id="1214"><a href="#1214">1214</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1215"

><td id="1215"><a href="#1215">1215</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1216"

><td id="1216"><a href="#1216">1216</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1217"

><td id="1217"><a href="#1217">1217</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1218"

><td id="1218"><a href="#1218">1218</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1219"

><td id="1219"><a href="#1219">1219</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1220"

><td id="1220"><a href="#1220">1220</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1221"

><td id="1221"><a href="#1221">1221</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1222"

><td id="1222"><a href="#1222">1222</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1223"

><td id="1223"><a href="#1223">1223</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1224"

><td id="1224"><a href="#1224">1224</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1225"

><td id="1225"><a href="#1225">1225</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1226"

><td id="1226"><a href="#1226">1226</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1227"

><td id="1227"><a href="#1227">1227</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1228"

><td id="1228"><a href="#1228">1228</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1229"

><td id="1229"><a href="#1229">1229</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1230"

><td id="1230"><a href="#1230">1230</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1231"

><td id="1231"><a href="#1231">1231</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1232"

><td id="1232"><a href="#1232">1232</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1233"

><td id="1233"><a href="#1233">1233</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1234"

><td id="1234"><a href="#1234">1234</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1235"

><td id="1235"><a href="#1235">1235</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1236"

><td id="1236"><a href="#1236">1236</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1237"

><td id="1237"><a href="#1237">1237</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1238"

><td id="1238"><a href="#1238">1238</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1239"

><td id="1239"><a href="#1239">1239</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1240"

><td id="1240"><a href="#1240">1240</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1241"

><td id="1241"><a href="#1241">1241</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1242"

><td id="1242"><a href="#1242">1242</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1243"

><td id="1243"><a href="#1243">1243</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1244"

><td id="1244"><a href="#1244">1244</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1245"

><td id="1245"><a href="#1245">1245</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1246"

><td id="1246"><a href="#1246">1246</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1247"

><td id="1247"><a href="#1247">1247</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1248"

><td id="1248"><a href="#1248">1248</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1249"

><td id="1249"><a href="#1249">1249</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1250"

><td id="1250"><a href="#1250">1250</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1251"

><td id="1251"><a href="#1251">1251</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1252"

><td id="1252"><a href="#1252">1252</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1253"

><td id="1253"><a href="#1253">1253</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1254"

><td id="1254"><a href="#1254">1254</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1255"

><td id="1255"><a href="#1255">1255</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1256"

><td id="1256"><a href="#1256">1256</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1257"

><td id="1257"><a href="#1257">1257</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1258"

><td id="1258"><a href="#1258">1258</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1259"

><td id="1259"><a href="#1259">1259</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1260"

><td id="1260"><a href="#1260">1260</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1261"

><td id="1261"><a href="#1261">1261</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1262"

><td id="1262"><a href="#1262">1262</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1263"

><td id="1263"><a href="#1263">1263</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1264"

><td id="1264"><a href="#1264">1264</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1265"

><td id="1265"><a href="#1265">1265</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1266"

><td id="1266"><a href="#1266">1266</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1267"

><td id="1267"><a href="#1267">1267</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1268"

><td id="1268"><a href="#1268">1268</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1269"

><td id="1269"><a href="#1269">1269</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1270"

><td id="1270"><a href="#1270">1270</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1271"

><td id="1271"><a href="#1271">1271</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1272"

><td id="1272"><a href="#1272">1272</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1273"

><td id="1273"><a href="#1273">1273</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1274"

><td id="1274"><a href="#1274">1274</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1275"

><td id="1275"><a href="#1275">1275</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1276"

><td id="1276"><a href="#1276">1276</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1277"

><td id="1277"><a href="#1277">1277</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1278"

><td id="1278"><a href="#1278">1278</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1279"

><td id="1279"><a href="#1279">1279</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1280"

><td id="1280"><a href="#1280">1280</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1281"

><td id="1281"><a href="#1281">1281</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1282"

><td id="1282"><a href="#1282">1282</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1283"

><td id="1283"><a href="#1283">1283</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1284"

><td id="1284"><a href="#1284">1284</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1285"

><td id="1285"><a href="#1285">1285</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1286"

><td id="1286"><a href="#1286">1286</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1287"

><td id="1287"><a href="#1287">1287</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1288"

><td id="1288"><a href="#1288">1288</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1289"

><td id="1289"><a href="#1289">1289</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1290"

><td id="1290"><a href="#1290">1290</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1291"

><td id="1291"><a href="#1291">1291</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1292"

><td id="1292"><a href="#1292">1292</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1293"

><td id="1293"><a href="#1293">1293</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1294"

><td id="1294"><a href="#1294">1294</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1295"

><td id="1295"><a href="#1295">1295</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1296"

><td id="1296"><a href="#1296">1296</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1297"

><td id="1297"><a href="#1297">1297</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1298"

><td id="1298"><a href="#1298">1298</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1299"

><td id="1299"><a href="#1299">1299</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1300"

><td id="1300"><a href="#1300">1300</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1301"

><td id="1301"><a href="#1301">1301</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1302"

><td id="1302"><a href="#1302">1302</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1303"

><td id="1303"><a href="#1303">1303</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1304"

><td id="1304"><a href="#1304">1304</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1305"

><td id="1305"><a href="#1305">1305</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1306"

><td id="1306"><a href="#1306">1306</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1307"

><td id="1307"><a href="#1307">1307</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1308"

><td id="1308"><a href="#1308">1308</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1309"

><td id="1309"><a href="#1309">1309</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1310"

><td id="1310"><a href="#1310">1310</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1311"

><td id="1311"><a href="#1311">1311</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1312"

><td id="1312"><a href="#1312">1312</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1313"

><td id="1313"><a href="#1313">1313</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1314"

><td id="1314"><a href="#1314">1314</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1315"

><td id="1315"><a href="#1315">1315</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1316"

><td id="1316"><a href="#1316">1316</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1317"

><td id="1317"><a href="#1317">1317</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1318"

><td id="1318"><a href="#1318">1318</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1319"

><td id="1319"><a href="#1319">1319</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1320"

><td id="1320"><a href="#1320">1320</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1321"

><td id="1321"><a href="#1321">1321</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1322"

><td id="1322"><a href="#1322">1322</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1323"

><td id="1323"><a href="#1323">1323</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1324"

><td id="1324"><a href="#1324">1324</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1325"

><td id="1325"><a href="#1325">1325</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1326"

><td id="1326"><a href="#1326">1326</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1327"

><td id="1327"><a href="#1327">1327</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1328"

><td id="1328"><a href="#1328">1328</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1329"

><td id="1329"><a href="#1329">1329</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1330"

><td id="1330"><a href="#1330">1330</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1331"

><td id="1331"><a href="#1331">1331</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1332"

><td id="1332"><a href="#1332">1332</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1333"

><td id="1333"><a href="#1333">1333</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1334"

><td id="1334"><a href="#1334">1334</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1335"

><td id="1335"><a href="#1335">1335</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1336"

><td id="1336"><a href="#1336">1336</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1337"

><td id="1337"><a href="#1337">1337</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1338"

><td id="1338"><a href="#1338">1338</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1339"

><td id="1339"><a href="#1339">1339</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1340"

><td id="1340"><a href="#1340">1340</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1341"

><td id="1341"><a href="#1341">1341</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1342"

><td id="1342"><a href="#1342">1342</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1343"

><td id="1343"><a href="#1343">1343</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1344"

><td id="1344"><a href="#1344">1344</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1345"

><td id="1345"><a href="#1345">1345</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1346"

><td id="1346"><a href="#1346">1346</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1347"

><td id="1347"><a href="#1347">1347</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1348"

><td id="1348"><a href="#1348">1348</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1349"

><td id="1349"><a href="#1349">1349</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1350"

><td id="1350"><a href="#1350">1350</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1351"

><td id="1351"><a href="#1351">1351</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1352"

><td id="1352"><a href="#1352">1352</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1353"

><td id="1353"><a href="#1353">1353</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1354"

><td id="1354"><a href="#1354">1354</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1355"

><td id="1355"><a href="#1355">1355</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1356"

><td id="1356"><a href="#1356">1356</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1357"

><td id="1357"><a href="#1357">1357</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1358"

><td id="1358"><a href="#1358">1358</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1359"

><td id="1359"><a href="#1359">1359</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1360"

><td id="1360"><a href="#1360">1360</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1361"

><td id="1361"><a href="#1361">1361</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1362"

><td id="1362"><a href="#1362">1362</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1363"

><td id="1363"><a href="#1363">1363</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1364"

><td id="1364"><a href="#1364">1364</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1365"

><td id="1365"><a href="#1365">1365</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1366"

><td id="1366"><a href="#1366">1366</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1367"

><td id="1367"><a href="#1367">1367</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1368"

><td id="1368"><a href="#1368">1368</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1369"

><td id="1369"><a href="#1369">1369</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1370"

><td id="1370"><a href="#1370">1370</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1371"

><td id="1371"><a href="#1371">1371</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1372"

><td id="1372"><a href="#1372">1372</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1373"

><td id="1373"><a href="#1373">1373</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1374"

><td id="1374"><a href="#1374">1374</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1375"

><td id="1375"><a href="#1375">1375</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1376"

><td id="1376"><a href="#1376">1376</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1377"

><td id="1377"><a href="#1377">1377</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1378"

><td id="1378"><a href="#1378">1378</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1379"

><td id="1379"><a href="#1379">1379</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1380"

><td id="1380"><a href="#1380">1380</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1381"

><td id="1381"><a href="#1381">1381</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1382"

><td id="1382"><a href="#1382">1382</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1383"

><td id="1383"><a href="#1383">1383</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1384"

><td id="1384"><a href="#1384">1384</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1385"

><td id="1385"><a href="#1385">1385</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1386"

><td id="1386"><a href="#1386">1386</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1387"

><td id="1387"><a href="#1387">1387</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1388"

><td id="1388"><a href="#1388">1388</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1389"

><td id="1389"><a href="#1389">1389</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1390"

><td id="1390"><a href="#1390">1390</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1391"

><td id="1391"><a href="#1391">1391</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1392"

><td id="1392"><a href="#1392">1392</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1393"

><td id="1393"><a href="#1393">1393</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1394"

><td id="1394"><a href="#1394">1394</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1395"

><td id="1395"><a href="#1395">1395</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1396"

><td id="1396"><a href="#1396">1396</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1397"

><td id="1397"><a href="#1397">1397</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1398"

><td id="1398"><a href="#1398">1398</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1399"

><td id="1399"><a href="#1399">1399</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1400"

><td id="1400"><a href="#1400">1400</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1401"

><td id="1401"><a href="#1401">1401</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1402"

><td id="1402"><a href="#1402">1402</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1403"

><td id="1403"><a href="#1403">1403</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1404"

><td id="1404"><a href="#1404">1404</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1405"

><td id="1405"><a href="#1405">1405</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1406"

><td id="1406"><a href="#1406">1406</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1407"

><td id="1407"><a href="#1407">1407</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1408"

><td id="1408"><a href="#1408">1408</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1409"

><td id="1409"><a href="#1409">1409</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1410"

><td id="1410"><a href="#1410">1410</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1411"

><td id="1411"><a href="#1411">1411</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1412"

><td id="1412"><a href="#1412">1412</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1413"

><td id="1413"><a href="#1413">1413</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1414"

><td id="1414"><a href="#1414">1414</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1415"

><td id="1415"><a href="#1415">1415</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1416"

><td id="1416"><a href="#1416">1416</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1417"

><td id="1417"><a href="#1417">1417</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1418"

><td id="1418"><a href="#1418">1418</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1419"

><td id="1419"><a href="#1419">1419</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1420"

><td id="1420"><a href="#1420">1420</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1421"

><td id="1421"><a href="#1421">1421</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1422"

><td id="1422"><a href="#1422">1422</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1423"

><td id="1423"><a href="#1423">1423</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1424"

><td id="1424"><a href="#1424">1424</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1425"

><td id="1425"><a href="#1425">1425</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1426"

><td id="1426"><a href="#1426">1426</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1427"

><td id="1427"><a href="#1427">1427</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1428"

><td id="1428"><a href="#1428">1428</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1429"

><td id="1429"><a href="#1429">1429</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1430"

><td id="1430"><a href="#1430">1430</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1431"

><td id="1431"><a href="#1431">1431</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1432"

><td id="1432"><a href="#1432">1432</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1433"

><td id="1433"><a href="#1433">1433</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1434"

><td id="1434"><a href="#1434">1434</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1435"

><td id="1435"><a href="#1435">1435</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1436"

><td id="1436"><a href="#1436">1436</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1437"

><td id="1437"><a href="#1437">1437</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1438"

><td id="1438"><a href="#1438">1438</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1439"

><td id="1439"><a href="#1439">1439</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1440"

><td id="1440"><a href="#1440">1440</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1441"

><td id="1441"><a href="#1441">1441</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1442"

><td id="1442"><a href="#1442">1442</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1443"

><td id="1443"><a href="#1443">1443</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1444"

><td id="1444"><a href="#1444">1444</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1445"

><td id="1445"><a href="#1445">1445</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1446"

><td id="1446"><a href="#1446">1446</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1447"

><td id="1447"><a href="#1447">1447</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1448"

><td id="1448"><a href="#1448">1448</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1449"

><td id="1449"><a href="#1449">1449</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1450"

><td id="1450"><a href="#1450">1450</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1451"

><td id="1451"><a href="#1451">1451</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1452"

><td id="1452"><a href="#1452">1452</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1453"

><td id="1453"><a href="#1453">1453</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1454"

><td id="1454"><a href="#1454">1454</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1455"

><td id="1455"><a href="#1455">1455</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1456"

><td id="1456"><a href="#1456">1456</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1457"

><td id="1457"><a href="#1457">1457</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1458"

><td id="1458"><a href="#1458">1458</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1459"

><td id="1459"><a href="#1459">1459</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1460"

><td id="1460"><a href="#1460">1460</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1461"

><td id="1461"><a href="#1461">1461</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1462"

><td id="1462"><a href="#1462">1462</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1463"

><td id="1463"><a href="#1463">1463</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1464"

><td id="1464"><a href="#1464">1464</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1465"

><td id="1465"><a href="#1465">1465</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1466"

><td id="1466"><a href="#1466">1466</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1467"

><td id="1467"><a href="#1467">1467</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1468"

><td id="1468"><a href="#1468">1468</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1469"

><td id="1469"><a href="#1469">1469</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1470"

><td id="1470"><a href="#1470">1470</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1471"

><td id="1471"><a href="#1471">1471</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1472"

><td id="1472"><a href="#1472">1472</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1473"

><td id="1473"><a href="#1473">1473</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1474"

><td id="1474"><a href="#1474">1474</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1475"

><td id="1475"><a href="#1475">1475</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1476"

><td id="1476"><a href="#1476">1476</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1477"

><td id="1477"><a href="#1477">1477</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1478"

><td id="1478"><a href="#1478">1478</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1479"

><td id="1479"><a href="#1479">1479</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1480"

><td id="1480"><a href="#1480">1480</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1481"

><td id="1481"><a href="#1481">1481</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1482"

><td id="1482"><a href="#1482">1482</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1483"

><td id="1483"><a href="#1483">1483</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1484"

><td id="1484"><a href="#1484">1484</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1485"

><td id="1485"><a href="#1485">1485</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1486"

><td id="1486"><a href="#1486">1486</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1487"

><td id="1487"><a href="#1487">1487</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1488"

><td id="1488"><a href="#1488">1488</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1489"

><td id="1489"><a href="#1489">1489</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1490"

><td id="1490"><a href="#1490">1490</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1491"

><td id="1491"><a href="#1491">1491</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1492"

><td id="1492"><a href="#1492">1492</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1493"

><td id="1493"><a href="#1493">1493</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1494"

><td id="1494"><a href="#1494">1494</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1495"

><td id="1495"><a href="#1495">1495</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1496"

><td id="1496"><a href="#1496">1496</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1497"

><td id="1497"><a href="#1497">1497</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1498"

><td id="1498"><a href="#1498">1498</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1499"

><td id="1499"><a href="#1499">1499</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1500"

><td id="1500"><a href="#1500">1500</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1501"

><td id="1501"><a href="#1501">1501</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1502"

><td id="1502"><a href="#1502">1502</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1503"

><td id="1503"><a href="#1503">1503</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1504"

><td id="1504"><a href="#1504">1504</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1505"

><td id="1505"><a href="#1505">1505</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1506"

><td id="1506"><a href="#1506">1506</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1507"

><td id="1507"><a href="#1507">1507</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1508"

><td id="1508"><a href="#1508">1508</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1509"

><td id="1509"><a href="#1509">1509</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1510"

><td id="1510"><a href="#1510">1510</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1511"

><td id="1511"><a href="#1511">1511</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1512"

><td id="1512"><a href="#1512">1512</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1513"

><td id="1513"><a href="#1513">1513</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1514"

><td id="1514"><a href="#1514">1514</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1515"

><td id="1515"><a href="#1515">1515</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1516"

><td id="1516"><a href="#1516">1516</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1517"

><td id="1517"><a href="#1517">1517</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1518"

><td id="1518"><a href="#1518">1518</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1519"

><td id="1519"><a href="#1519">1519</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1520"

><td id="1520"><a href="#1520">1520</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1521"

><td id="1521"><a href="#1521">1521</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1522"

><td id="1522"><a href="#1522">1522</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1523"

><td id="1523"><a href="#1523">1523</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1524"

><td id="1524"><a href="#1524">1524</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1525"

><td id="1525"><a href="#1525">1525</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1526"

><td id="1526"><a href="#1526">1526</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1527"

><td id="1527"><a href="#1527">1527</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1528"

><td id="1528"><a href="#1528">1528</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1529"

><td id="1529"><a href="#1529">1529</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1530"

><td id="1530"><a href="#1530">1530</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1531"

><td id="1531"><a href="#1531">1531</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1532"

><td id="1532"><a href="#1532">1532</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1533"

><td id="1533"><a href="#1533">1533</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1534"

><td id="1534"><a href="#1534">1534</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1535"

><td id="1535"><a href="#1535">1535</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1536"

><td id="1536"><a href="#1536">1536</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1537"

><td id="1537"><a href="#1537">1537</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1538"

><td id="1538"><a href="#1538">1538</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1539"

><td id="1539"><a href="#1539">1539</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1540"

><td id="1540"><a href="#1540">1540</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1541"

><td id="1541"><a href="#1541">1541</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1542"

><td id="1542"><a href="#1542">1542</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1543"

><td id="1543"><a href="#1543">1543</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1544"

><td id="1544"><a href="#1544">1544</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1545"

><td id="1545"><a href="#1545">1545</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1546"

><td id="1546"><a href="#1546">1546</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1547"

><td id="1547"><a href="#1547">1547</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1548"

><td id="1548"><a href="#1548">1548</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1549"

><td id="1549"><a href="#1549">1549</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1550"

><td id="1550"><a href="#1550">1550</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1551"

><td id="1551"><a href="#1551">1551</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1552"

><td id="1552"><a href="#1552">1552</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1553"

><td id="1553"><a href="#1553">1553</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1554"

><td id="1554"><a href="#1554">1554</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1555"

><td id="1555"><a href="#1555">1555</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1556"

><td id="1556"><a href="#1556">1556</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1557"

><td id="1557"><a href="#1557">1557</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1558"

><td id="1558"><a href="#1558">1558</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1559"

><td id="1559"><a href="#1559">1559</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1560"

><td id="1560"><a href="#1560">1560</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1561"

><td id="1561"><a href="#1561">1561</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1562"

><td id="1562"><a href="#1562">1562</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1563"

><td id="1563"><a href="#1563">1563</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1564"

><td id="1564"><a href="#1564">1564</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1565"

><td id="1565"><a href="#1565">1565</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1566"

><td id="1566"><a href="#1566">1566</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1567"

><td id="1567"><a href="#1567">1567</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1568"

><td id="1568"><a href="#1568">1568</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1569"

><td id="1569"><a href="#1569">1569</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1570"

><td id="1570"><a href="#1570">1570</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1571"

><td id="1571"><a href="#1571">1571</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1572"

><td id="1572"><a href="#1572">1572</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1573"

><td id="1573"><a href="#1573">1573</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1574"

><td id="1574"><a href="#1574">1574</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1575"

><td id="1575"><a href="#1575">1575</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1576"

><td id="1576"><a href="#1576">1576</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1577"

><td id="1577"><a href="#1577">1577</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1578"

><td id="1578"><a href="#1578">1578</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1579"

><td id="1579"><a href="#1579">1579</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1580"

><td id="1580"><a href="#1580">1580</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1581"

><td id="1581"><a href="#1581">1581</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1582"

><td id="1582"><a href="#1582">1582</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1583"

><td id="1583"><a href="#1583">1583</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1584"

><td id="1584"><a href="#1584">1584</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1585"

><td id="1585"><a href="#1585">1585</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1586"

><td id="1586"><a href="#1586">1586</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1587"

><td id="1587"><a href="#1587">1587</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1588"

><td id="1588"><a href="#1588">1588</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1589"

><td id="1589"><a href="#1589">1589</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1590"

><td id="1590"><a href="#1590">1590</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1591"

><td id="1591"><a href="#1591">1591</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1592"

><td id="1592"><a href="#1592">1592</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1593"

><td id="1593"><a href="#1593">1593</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1594"

><td id="1594"><a href="#1594">1594</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1595"

><td id="1595"><a href="#1595">1595</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1596"

><td id="1596"><a href="#1596">1596</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1597"

><td id="1597"><a href="#1597">1597</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1598"

><td id="1598"><a href="#1598">1598</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1599"

><td id="1599"><a href="#1599">1599</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1600"

><td id="1600"><a href="#1600">1600</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1601"

><td id="1601"><a href="#1601">1601</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1602"

><td id="1602"><a href="#1602">1602</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1603"

><td id="1603"><a href="#1603">1603</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1604"

><td id="1604"><a href="#1604">1604</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1605"

><td id="1605"><a href="#1605">1605</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1606"

><td id="1606"><a href="#1606">1606</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1607"

><td id="1607"><a href="#1607">1607</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1608"

><td id="1608"><a href="#1608">1608</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1609"

><td id="1609"><a href="#1609">1609</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1610"

><td id="1610"><a href="#1610">1610</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1611"

><td id="1611"><a href="#1611">1611</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1612"

><td id="1612"><a href="#1612">1612</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1613"

><td id="1613"><a href="#1613">1613</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1614"

><td id="1614"><a href="#1614">1614</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1615"

><td id="1615"><a href="#1615">1615</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1616"

><td id="1616"><a href="#1616">1616</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1617"

><td id="1617"><a href="#1617">1617</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1618"

><td id="1618"><a href="#1618">1618</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1619"

><td id="1619"><a href="#1619">1619</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1620"

><td id="1620"><a href="#1620">1620</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1621"

><td id="1621"><a href="#1621">1621</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1622"

><td id="1622"><a href="#1622">1622</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1623"

><td id="1623"><a href="#1623">1623</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1624"

><td id="1624"><a href="#1624">1624</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1625"

><td id="1625"><a href="#1625">1625</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1626"

><td id="1626"><a href="#1626">1626</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1627"

><td id="1627"><a href="#1627">1627</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1628"

><td id="1628"><a href="#1628">1628</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1629"

><td id="1629"><a href="#1629">1629</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1630"

><td id="1630"><a href="#1630">1630</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1631"

><td id="1631"><a href="#1631">1631</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1632"

><td id="1632"><a href="#1632">1632</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1633"

><td id="1633"><a href="#1633">1633</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1634"

><td id="1634"><a href="#1634">1634</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1635"

><td id="1635"><a href="#1635">1635</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1636"

><td id="1636"><a href="#1636">1636</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1637"

><td id="1637"><a href="#1637">1637</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1638"

><td id="1638"><a href="#1638">1638</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1639"

><td id="1639"><a href="#1639">1639</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1640"

><td id="1640"><a href="#1640">1640</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1641"

><td id="1641"><a href="#1641">1641</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1642"

><td id="1642"><a href="#1642">1642</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1643"

><td id="1643"><a href="#1643">1643</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1644"

><td id="1644"><a href="#1644">1644</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1645"

><td id="1645"><a href="#1645">1645</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1646"

><td id="1646"><a href="#1646">1646</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1647"

><td id="1647"><a href="#1647">1647</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1648"

><td id="1648"><a href="#1648">1648</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1649"

><td id="1649"><a href="#1649">1649</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1650"

><td id="1650"><a href="#1650">1650</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1651"

><td id="1651"><a href="#1651">1651</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1652"

><td id="1652"><a href="#1652">1652</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1653"

><td id="1653"><a href="#1653">1653</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1654"

><td id="1654"><a href="#1654">1654</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1655"

><td id="1655"><a href="#1655">1655</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1656"

><td id="1656"><a href="#1656">1656</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1657"

><td id="1657"><a href="#1657">1657</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1658"

><td id="1658"><a href="#1658">1658</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1659"

><td id="1659"><a href="#1659">1659</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1660"

><td id="1660"><a href="#1660">1660</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1661"

><td id="1661"><a href="#1661">1661</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1662"

><td id="1662"><a href="#1662">1662</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1663"

><td id="1663"><a href="#1663">1663</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1664"

><td id="1664"><a href="#1664">1664</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1665"

><td id="1665"><a href="#1665">1665</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1666"

><td id="1666"><a href="#1666">1666</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1667"

><td id="1667"><a href="#1667">1667</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1668"

><td id="1668"><a href="#1668">1668</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1669"

><td id="1669"><a href="#1669">1669</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1670"

><td id="1670"><a href="#1670">1670</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1671"

><td id="1671"><a href="#1671">1671</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1672"

><td id="1672"><a href="#1672">1672</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1673"

><td id="1673"><a href="#1673">1673</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1674"

><td id="1674"><a href="#1674">1674</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1675"

><td id="1675"><a href="#1675">1675</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1676"

><td id="1676"><a href="#1676">1676</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1677"

><td id="1677"><a href="#1677">1677</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1678"

><td id="1678"><a href="#1678">1678</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1679"

><td id="1679"><a href="#1679">1679</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1680"

><td id="1680"><a href="#1680">1680</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1681"

><td id="1681"><a href="#1681">1681</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1682"

><td id="1682"><a href="#1682">1682</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1683"

><td id="1683"><a href="#1683">1683</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1684"

><td id="1684"><a href="#1684">1684</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1685"

><td id="1685"><a href="#1685">1685</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1686"

><td id="1686"><a href="#1686">1686</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1687"

><td id="1687"><a href="#1687">1687</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1688"

><td id="1688"><a href="#1688">1688</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1689"

><td id="1689"><a href="#1689">1689</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1690"

><td id="1690"><a href="#1690">1690</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1691"

><td id="1691"><a href="#1691">1691</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1692"

><td id="1692"><a href="#1692">1692</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1693"

><td id="1693"><a href="#1693">1693</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1694"

><td id="1694"><a href="#1694">1694</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1695"

><td id="1695"><a href="#1695">1695</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1696"

><td id="1696"><a href="#1696">1696</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1697"

><td id="1697"><a href="#1697">1697</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1698"

><td id="1698"><a href="#1698">1698</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1699"

><td id="1699"><a href="#1699">1699</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1700"

><td id="1700"><a href="#1700">1700</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1701"

><td id="1701"><a href="#1701">1701</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1702"

><td id="1702"><a href="#1702">1702</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1703"

><td id="1703"><a href="#1703">1703</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1704"

><td id="1704"><a href="#1704">1704</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1705"

><td id="1705"><a href="#1705">1705</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1706"

><td id="1706"><a href="#1706">1706</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1707"

><td id="1707"><a href="#1707">1707</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1708"

><td id="1708"><a href="#1708">1708</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1709"

><td id="1709"><a href="#1709">1709</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1710"

><td id="1710"><a href="#1710">1710</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1711"

><td id="1711"><a href="#1711">1711</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1712"

><td id="1712"><a href="#1712">1712</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1713"

><td id="1713"><a href="#1713">1713</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1714"

><td id="1714"><a href="#1714">1714</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1715"

><td id="1715"><a href="#1715">1715</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1716"

><td id="1716"><a href="#1716">1716</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1717"

><td id="1717"><a href="#1717">1717</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1718"

><td id="1718"><a href="#1718">1718</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1719"

><td id="1719"><a href="#1719">1719</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1720"

><td id="1720"><a href="#1720">1720</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1721"

><td id="1721"><a href="#1721">1721</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1722"

><td id="1722"><a href="#1722">1722</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1723"

><td id="1723"><a href="#1723">1723</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1724"

><td id="1724"><a href="#1724">1724</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1725"

><td id="1725"><a href="#1725">1725</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1726"

><td id="1726"><a href="#1726">1726</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1727"

><td id="1727"><a href="#1727">1727</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1728"

><td id="1728"><a href="#1728">1728</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1729"

><td id="1729"><a href="#1729">1729</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1730"

><td id="1730"><a href="#1730">1730</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1731"

><td id="1731"><a href="#1731">1731</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1732"

><td id="1732"><a href="#1732">1732</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1733"

><td id="1733"><a href="#1733">1733</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1734"

><td id="1734"><a href="#1734">1734</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1735"

><td id="1735"><a href="#1735">1735</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1736"

><td id="1736"><a href="#1736">1736</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1737"

><td id="1737"><a href="#1737">1737</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1738"

><td id="1738"><a href="#1738">1738</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1739"

><td id="1739"><a href="#1739">1739</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1740"

><td id="1740"><a href="#1740">1740</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1741"

><td id="1741"><a href="#1741">1741</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1742"

><td id="1742"><a href="#1742">1742</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1743"

><td id="1743"><a href="#1743">1743</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1744"

><td id="1744"><a href="#1744">1744</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1745"

><td id="1745"><a href="#1745">1745</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1746"

><td id="1746"><a href="#1746">1746</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1747"

><td id="1747"><a href="#1747">1747</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1748"

><td id="1748"><a href="#1748">1748</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1749"

><td id="1749"><a href="#1749">1749</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1750"

><td id="1750"><a href="#1750">1750</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1751"

><td id="1751"><a href="#1751">1751</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1752"

><td id="1752"><a href="#1752">1752</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1753"

><td id="1753"><a href="#1753">1753</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1754"

><td id="1754"><a href="#1754">1754</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1755"

><td id="1755"><a href="#1755">1755</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1756"

><td id="1756"><a href="#1756">1756</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1757"

><td id="1757"><a href="#1757">1757</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1758"

><td id="1758"><a href="#1758">1758</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1759"

><td id="1759"><a href="#1759">1759</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1760"

><td id="1760"><a href="#1760">1760</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1761"

><td id="1761"><a href="#1761">1761</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1762"

><td id="1762"><a href="#1762">1762</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1763"

><td id="1763"><a href="#1763">1763</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1764"

><td id="1764"><a href="#1764">1764</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1765"

><td id="1765"><a href="#1765">1765</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1766"

><td id="1766"><a href="#1766">1766</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1767"

><td id="1767"><a href="#1767">1767</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1768"

><td id="1768"><a href="#1768">1768</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1769"

><td id="1769"><a href="#1769">1769</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1770"

><td id="1770"><a href="#1770">1770</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1771"

><td id="1771"><a href="#1771">1771</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1772"

><td id="1772"><a href="#1772">1772</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1773"

><td id="1773"><a href="#1773">1773</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1774"

><td id="1774"><a href="#1774">1774</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1775"

><td id="1775"><a href="#1775">1775</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1776"

><td id="1776"><a href="#1776">1776</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1777"

><td id="1777"><a href="#1777">1777</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1778"

><td id="1778"><a href="#1778">1778</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1779"

><td id="1779"><a href="#1779">1779</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1780"

><td id="1780"><a href="#1780">1780</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1781"

><td id="1781"><a href="#1781">1781</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1782"

><td id="1782"><a href="#1782">1782</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1783"

><td id="1783"><a href="#1783">1783</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1784"

><td id="1784"><a href="#1784">1784</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1785"

><td id="1785"><a href="#1785">1785</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1786"

><td id="1786"><a href="#1786">1786</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1787"

><td id="1787"><a href="#1787">1787</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1788"

><td id="1788"><a href="#1788">1788</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1789"

><td id="1789"><a href="#1789">1789</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1790"

><td id="1790"><a href="#1790">1790</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1791"

><td id="1791"><a href="#1791">1791</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1792"

><td id="1792"><a href="#1792">1792</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1793"

><td id="1793"><a href="#1793">1793</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1794"

><td id="1794"><a href="#1794">1794</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1795"

><td id="1795"><a href="#1795">1795</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1796"

><td id="1796"><a href="#1796">1796</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1797"

><td id="1797"><a href="#1797">1797</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1798"

><td id="1798"><a href="#1798">1798</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1799"

><td id="1799"><a href="#1799">1799</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1800"

><td id="1800"><a href="#1800">1800</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1801"

><td id="1801"><a href="#1801">1801</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1802"

><td id="1802"><a href="#1802">1802</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1803"

><td id="1803"><a href="#1803">1803</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1804"

><td id="1804"><a href="#1804">1804</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1805"

><td id="1805"><a href="#1805">1805</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1806"

><td id="1806"><a href="#1806">1806</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1807"

><td id="1807"><a href="#1807">1807</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1808"

><td id="1808"><a href="#1808">1808</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1809"

><td id="1809"><a href="#1809">1809</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1810"

><td id="1810"><a href="#1810">1810</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1811"

><td id="1811"><a href="#1811">1811</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1812"

><td id="1812"><a href="#1812">1812</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1813"

><td id="1813"><a href="#1813">1813</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1814"

><td id="1814"><a href="#1814">1814</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1815"

><td id="1815"><a href="#1815">1815</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1816"

><td id="1816"><a href="#1816">1816</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1817"

><td id="1817"><a href="#1817">1817</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1818"

><td id="1818"><a href="#1818">1818</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1819"

><td id="1819"><a href="#1819">1819</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1820"

><td id="1820"><a href="#1820">1820</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1821"

><td id="1821"><a href="#1821">1821</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1822"

><td id="1822"><a href="#1822">1822</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1823"

><td id="1823"><a href="#1823">1823</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1824"

><td id="1824"><a href="#1824">1824</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1825"

><td id="1825"><a href="#1825">1825</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1826"

><td id="1826"><a href="#1826">1826</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1827"

><td id="1827"><a href="#1827">1827</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1828"

><td id="1828"><a href="#1828">1828</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1829"

><td id="1829"><a href="#1829">1829</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1830"

><td id="1830"><a href="#1830">1830</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1831"

><td id="1831"><a href="#1831">1831</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1832"

><td id="1832"><a href="#1832">1832</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1833"

><td id="1833"><a href="#1833">1833</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1834"

><td id="1834"><a href="#1834">1834</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1835"

><td id="1835"><a href="#1835">1835</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1836"

><td id="1836"><a href="#1836">1836</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1837"

><td id="1837"><a href="#1837">1837</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1838"

><td id="1838"><a href="#1838">1838</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1839"

><td id="1839"><a href="#1839">1839</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1840"

><td id="1840"><a href="#1840">1840</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1841"

><td id="1841"><a href="#1841">1841</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1842"

><td id="1842"><a href="#1842">1842</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1843"

><td id="1843"><a href="#1843">1843</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1844"

><td id="1844"><a href="#1844">1844</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1845"

><td id="1845"><a href="#1845">1845</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1846"

><td id="1846"><a href="#1846">1846</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1847"

><td id="1847"><a href="#1847">1847</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1848"

><td id="1848"><a href="#1848">1848</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1849"

><td id="1849"><a href="#1849">1849</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1850"

><td id="1850"><a href="#1850">1850</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1851"

><td id="1851"><a href="#1851">1851</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1852"

><td id="1852"><a href="#1852">1852</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1853"

><td id="1853"><a href="#1853">1853</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1854"

><td id="1854"><a href="#1854">1854</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1855"

><td id="1855"><a href="#1855">1855</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1856"

><td id="1856"><a href="#1856">1856</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1857"

><td id="1857"><a href="#1857">1857</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1858"

><td id="1858"><a href="#1858">1858</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1859"

><td id="1859"><a href="#1859">1859</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1860"

><td id="1860"><a href="#1860">1860</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1861"

><td id="1861"><a href="#1861">1861</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1862"

><td id="1862"><a href="#1862">1862</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1863"

><td id="1863"><a href="#1863">1863</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1864"

><td id="1864"><a href="#1864">1864</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1865"

><td id="1865"><a href="#1865">1865</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1866"

><td id="1866"><a href="#1866">1866</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1867"

><td id="1867"><a href="#1867">1867</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1868"

><td id="1868"><a href="#1868">1868</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1869"

><td id="1869"><a href="#1869">1869</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1870"

><td id="1870"><a href="#1870">1870</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1871"

><td id="1871"><a href="#1871">1871</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1872"

><td id="1872"><a href="#1872">1872</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1873"

><td id="1873"><a href="#1873">1873</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1874"

><td id="1874"><a href="#1874">1874</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1875"

><td id="1875"><a href="#1875">1875</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1876"

><td id="1876"><a href="#1876">1876</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1877"

><td id="1877"><a href="#1877">1877</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1878"

><td id="1878"><a href="#1878">1878</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1879"

><td id="1879"><a href="#1879">1879</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1880"

><td id="1880"><a href="#1880">1880</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1881"

><td id="1881"><a href="#1881">1881</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1882"

><td id="1882"><a href="#1882">1882</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1883"

><td id="1883"><a href="#1883">1883</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1884"

><td id="1884"><a href="#1884">1884</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1885"

><td id="1885"><a href="#1885">1885</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1886"

><td id="1886"><a href="#1886">1886</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1887"

><td id="1887"><a href="#1887">1887</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1888"

><td id="1888"><a href="#1888">1888</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1889"

><td id="1889"><a href="#1889">1889</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1890"

><td id="1890"><a href="#1890">1890</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1891"

><td id="1891"><a href="#1891">1891</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1892"

><td id="1892"><a href="#1892">1892</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1893"

><td id="1893"><a href="#1893">1893</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1894"

><td id="1894"><a href="#1894">1894</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1895"

><td id="1895"><a href="#1895">1895</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1896"

><td id="1896"><a href="#1896">1896</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1897"

><td id="1897"><a href="#1897">1897</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1898"

><td id="1898"><a href="#1898">1898</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1899"

><td id="1899"><a href="#1899">1899</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1900"

><td id="1900"><a href="#1900">1900</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1901"

><td id="1901"><a href="#1901">1901</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1902"

><td id="1902"><a href="#1902">1902</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1903"

><td id="1903"><a href="#1903">1903</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1904"

><td id="1904"><a href="#1904">1904</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1905"

><td id="1905"><a href="#1905">1905</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1906"

><td id="1906"><a href="#1906">1906</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1907"

><td id="1907"><a href="#1907">1907</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1908"

><td id="1908"><a href="#1908">1908</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1909"

><td id="1909"><a href="#1909">1909</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1910"

><td id="1910"><a href="#1910">1910</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1911"

><td id="1911"><a href="#1911">1911</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1912"

><td id="1912"><a href="#1912">1912</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1913"

><td id="1913"><a href="#1913">1913</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1914"

><td id="1914"><a href="#1914">1914</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1915"

><td id="1915"><a href="#1915">1915</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1916"

><td id="1916"><a href="#1916">1916</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1917"

><td id="1917"><a href="#1917">1917</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1918"

><td id="1918"><a href="#1918">1918</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1919"

><td id="1919"><a href="#1919">1919</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1920"

><td id="1920"><a href="#1920">1920</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1921"

><td id="1921"><a href="#1921">1921</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1922"

><td id="1922"><a href="#1922">1922</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1923"

><td id="1923"><a href="#1923">1923</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1924"

><td id="1924"><a href="#1924">1924</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1925"

><td id="1925"><a href="#1925">1925</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1926"

><td id="1926"><a href="#1926">1926</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1927"

><td id="1927"><a href="#1927">1927</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1928"

><td id="1928"><a href="#1928">1928</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1929"

><td id="1929"><a href="#1929">1929</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1930"

><td id="1930"><a href="#1930">1930</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1931"

><td id="1931"><a href="#1931">1931</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1932"

><td id="1932"><a href="#1932">1932</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1933"

><td id="1933"><a href="#1933">1933</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1934"

><td id="1934"><a href="#1934">1934</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1935"

><td id="1935"><a href="#1935">1935</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1936"

><td id="1936"><a href="#1936">1936</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1937"

><td id="1937"><a href="#1937">1937</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1938"

><td id="1938"><a href="#1938">1938</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1939"

><td id="1939"><a href="#1939">1939</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1940"

><td id="1940"><a href="#1940">1940</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1941"

><td id="1941"><a href="#1941">1941</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1942"

><td id="1942"><a href="#1942">1942</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1943"

><td id="1943"><a href="#1943">1943</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1944"

><td id="1944"><a href="#1944">1944</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1945"

><td id="1945"><a href="#1945">1945</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1946"

><td id="1946"><a href="#1946">1946</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1947"

><td id="1947"><a href="#1947">1947</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1948"

><td id="1948"><a href="#1948">1948</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1949"

><td id="1949"><a href="#1949">1949</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1950"

><td id="1950"><a href="#1950">1950</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1951"

><td id="1951"><a href="#1951">1951</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1952"

><td id="1952"><a href="#1952">1952</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1953"

><td id="1953"><a href="#1953">1953</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1954"

><td id="1954"><a href="#1954">1954</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1955"

><td id="1955"><a href="#1955">1955</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1956"

><td id="1956"><a href="#1956">1956</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1957"

><td id="1957"><a href="#1957">1957</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1958"

><td id="1958"><a href="#1958">1958</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1959"

><td id="1959"><a href="#1959">1959</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1960"

><td id="1960"><a href="#1960">1960</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1961"

><td id="1961"><a href="#1961">1961</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1962"

><td id="1962"><a href="#1962">1962</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1963"

><td id="1963"><a href="#1963">1963</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1964"

><td id="1964"><a href="#1964">1964</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1965"

><td id="1965"><a href="#1965">1965</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1966"

><td id="1966"><a href="#1966">1966</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1967"

><td id="1967"><a href="#1967">1967</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1968"

><td id="1968"><a href="#1968">1968</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1969"

><td id="1969"><a href="#1969">1969</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1970"

><td id="1970"><a href="#1970">1970</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1971"

><td id="1971"><a href="#1971">1971</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1972"

><td id="1972"><a href="#1972">1972</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1973"

><td id="1973"><a href="#1973">1973</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1974"

><td id="1974"><a href="#1974">1974</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1975"

><td id="1975"><a href="#1975">1975</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1976"

><td id="1976"><a href="#1976">1976</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1977"

><td id="1977"><a href="#1977">1977</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1978"

><td id="1978"><a href="#1978">1978</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1979"

><td id="1979"><a href="#1979">1979</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1980"

><td id="1980"><a href="#1980">1980</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1981"

><td id="1981"><a href="#1981">1981</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1982"

><td id="1982"><a href="#1982">1982</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1983"

><td id="1983"><a href="#1983">1983</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1984"

><td id="1984"><a href="#1984">1984</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1985"

><td id="1985"><a href="#1985">1985</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1986"

><td id="1986"><a href="#1986">1986</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1987"

><td id="1987"><a href="#1987">1987</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1988"

><td id="1988"><a href="#1988">1988</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1989"

><td id="1989"><a href="#1989">1989</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1990"

><td id="1990"><a href="#1990">1990</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1991"

><td id="1991"><a href="#1991">1991</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1992"

><td id="1992"><a href="#1992">1992</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1993"

><td id="1993"><a href="#1993">1993</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1994"

><td id="1994"><a href="#1994">1994</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1995"

><td id="1995"><a href="#1995">1995</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1996"

><td id="1996"><a href="#1996">1996</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1997"

><td id="1997"><a href="#1997">1997</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1998"

><td id="1998"><a href="#1998">1998</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1999"

><td id="1999"><a href="#1999">1999</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2000"

><td id="2000"><a href="#2000">2000</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2001"

><td id="2001"><a href="#2001">2001</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2002"

><td id="2002"><a href="#2002">2002</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2003"

><td id="2003"><a href="#2003">2003</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2004"

><td id="2004"><a href="#2004">2004</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2005"

><td id="2005"><a href="#2005">2005</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2006"

><td id="2006"><a href="#2006">2006</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2007"

><td id="2007"><a href="#2007">2007</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2008"

><td id="2008"><a href="#2008">2008</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2009"

><td id="2009"><a href="#2009">2009</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2010"

><td id="2010"><a href="#2010">2010</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2011"

><td id="2011"><a href="#2011">2011</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2012"

><td id="2012"><a href="#2012">2012</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2013"

><td id="2013"><a href="#2013">2013</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2014"

><td id="2014"><a href="#2014">2014</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2015"

><td id="2015"><a href="#2015">2015</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2016"

><td id="2016"><a href="#2016">2016</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2017"

><td id="2017"><a href="#2017">2017</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2018"

><td id="2018"><a href="#2018">2018</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2019"

><td id="2019"><a href="#2019">2019</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2020"

><td id="2020"><a href="#2020">2020</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2021"

><td id="2021"><a href="#2021">2021</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2022"

><td id="2022"><a href="#2022">2022</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2023"

><td id="2023"><a href="#2023">2023</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2024"

><td id="2024"><a href="#2024">2024</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2025"

><td id="2025"><a href="#2025">2025</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2026"

><td id="2026"><a href="#2026">2026</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2027"

><td id="2027"><a href="#2027">2027</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2028"

><td id="2028"><a href="#2028">2028</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2029"

><td id="2029"><a href="#2029">2029</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2030"

><td id="2030"><a href="#2030">2030</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2031"

><td id="2031"><a href="#2031">2031</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2032"

><td id="2032"><a href="#2032">2032</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2033"

><td id="2033"><a href="#2033">2033</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2034"

><td id="2034"><a href="#2034">2034</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2035"

><td id="2035"><a href="#2035">2035</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2036"

><td id="2036"><a href="#2036">2036</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2037"

><td id="2037"><a href="#2037">2037</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2038"

><td id="2038"><a href="#2038">2038</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2039"

><td id="2039"><a href="#2039">2039</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2040"

><td id="2040"><a href="#2040">2040</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2041"

><td id="2041"><a href="#2041">2041</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2042"

><td id="2042"><a href="#2042">2042</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2043"

><td id="2043"><a href="#2043">2043</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2044"

><td id="2044"><a href="#2044">2044</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2045"

><td id="2045"><a href="#2045">2045</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2046"

><td id="2046"><a href="#2046">2046</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2047"

><td id="2047"><a href="#2047">2047</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2048"

><td id="2048"><a href="#2048">2048</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2049"

><td id="2049"><a href="#2049">2049</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2050"

><td id="2050"><a href="#2050">2050</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2051"

><td id="2051"><a href="#2051">2051</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2052"

><td id="2052"><a href="#2052">2052</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2053"

><td id="2053"><a href="#2053">2053</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2054"

><td id="2054"><a href="#2054">2054</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2055"

><td id="2055"><a href="#2055">2055</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2056"

><td id="2056"><a href="#2056">2056</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2057"

><td id="2057"><a href="#2057">2057</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2058"

><td id="2058"><a href="#2058">2058</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2059"

><td id="2059"><a href="#2059">2059</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2060"

><td id="2060"><a href="#2060">2060</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2061"

><td id="2061"><a href="#2061">2061</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2062"

><td id="2062"><a href="#2062">2062</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2063"

><td id="2063"><a href="#2063">2063</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2064"

><td id="2064"><a href="#2064">2064</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2065"

><td id="2065"><a href="#2065">2065</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2066"

><td id="2066"><a href="#2066">2066</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2067"

><td id="2067"><a href="#2067">2067</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2068"

><td id="2068"><a href="#2068">2068</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2069"

><td id="2069"><a href="#2069">2069</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2070"

><td id="2070"><a href="#2070">2070</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2071"

><td id="2071"><a href="#2071">2071</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2072"

><td id="2072"><a href="#2072">2072</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2073"

><td id="2073"><a href="#2073">2073</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2074"

><td id="2074"><a href="#2074">2074</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2075"

><td id="2075"><a href="#2075">2075</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2076"

><td id="2076"><a href="#2076">2076</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2077"

><td id="2077"><a href="#2077">2077</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2078"

><td id="2078"><a href="#2078">2078</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2079"

><td id="2079"><a href="#2079">2079</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2080"

><td id="2080"><a href="#2080">2080</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2081"

><td id="2081"><a href="#2081">2081</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2082"

><td id="2082"><a href="#2082">2082</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2083"

><td id="2083"><a href="#2083">2083</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2084"

><td id="2084"><a href="#2084">2084</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2085"

><td id="2085"><a href="#2085">2085</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2086"

><td id="2086"><a href="#2086">2086</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2087"

><td id="2087"><a href="#2087">2087</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2088"

><td id="2088"><a href="#2088">2088</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2089"

><td id="2089"><a href="#2089">2089</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2090"

><td id="2090"><a href="#2090">2090</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2091"

><td id="2091"><a href="#2091">2091</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2092"

><td id="2092"><a href="#2092">2092</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2093"

><td id="2093"><a href="#2093">2093</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2094"

><td id="2094"><a href="#2094">2094</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2095"

><td id="2095"><a href="#2095">2095</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2096"

><td id="2096"><a href="#2096">2096</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2097"

><td id="2097"><a href="#2097">2097</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2098"

><td id="2098"><a href="#2098">2098</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2099"

><td id="2099"><a href="#2099">2099</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2100"

><td id="2100"><a href="#2100">2100</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2101"

><td id="2101"><a href="#2101">2101</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2102"

><td id="2102"><a href="#2102">2102</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2103"

><td id="2103"><a href="#2103">2103</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2104"

><td id="2104"><a href="#2104">2104</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2105"

><td id="2105"><a href="#2105">2105</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2106"

><td id="2106"><a href="#2106">2106</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2107"

><td id="2107"><a href="#2107">2107</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2108"

><td id="2108"><a href="#2108">2108</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2109"

><td id="2109"><a href="#2109">2109</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2110"

><td id="2110"><a href="#2110">2110</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2111"

><td id="2111"><a href="#2111">2111</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2112"

><td id="2112"><a href="#2112">2112</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2113"

><td id="2113"><a href="#2113">2113</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2114"

><td id="2114"><a href="#2114">2114</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2115"

><td id="2115"><a href="#2115">2115</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2116"

><td id="2116"><a href="#2116">2116</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2117"

><td id="2117"><a href="#2117">2117</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2118"

><td id="2118"><a href="#2118">2118</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2119"

><td id="2119"><a href="#2119">2119</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2120"

><td id="2120"><a href="#2120">2120</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2121"

><td id="2121"><a href="#2121">2121</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2122"

><td id="2122"><a href="#2122">2122</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2123"

><td id="2123"><a href="#2123">2123</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2124"

><td id="2124"><a href="#2124">2124</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2125"

><td id="2125"><a href="#2125">2125</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2126"

><td id="2126"><a href="#2126">2126</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2127"

><td id="2127"><a href="#2127">2127</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2128"

><td id="2128"><a href="#2128">2128</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2129"

><td id="2129"><a href="#2129">2129</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2130"

><td id="2130"><a href="#2130">2130</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2131"

><td id="2131"><a href="#2131">2131</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2132"

><td id="2132"><a href="#2132">2132</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2133"

><td id="2133"><a href="#2133">2133</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2134"

><td id="2134"><a href="#2134">2134</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2135"

><td id="2135"><a href="#2135">2135</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2136"

><td id="2136"><a href="#2136">2136</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2137"

><td id="2137"><a href="#2137">2137</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2138"

><td id="2138"><a href="#2138">2138</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2139"

><td id="2139"><a href="#2139">2139</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2140"

><td id="2140"><a href="#2140">2140</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2141"

><td id="2141"><a href="#2141">2141</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2142"

><td id="2142"><a href="#2142">2142</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2143"

><td id="2143"><a href="#2143">2143</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2144"

><td id="2144"><a href="#2144">2144</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2145"

><td id="2145"><a href="#2145">2145</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2146"

><td id="2146"><a href="#2146">2146</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2147"

><td id="2147"><a href="#2147">2147</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2148"

><td id="2148"><a href="#2148">2148</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2149"

><td id="2149"><a href="#2149">2149</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2150"

><td id="2150"><a href="#2150">2150</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2151"

><td id="2151"><a href="#2151">2151</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2152"

><td id="2152"><a href="#2152">2152</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2153"

><td id="2153"><a href="#2153">2153</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2154"

><td id="2154"><a href="#2154">2154</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2155"

><td id="2155"><a href="#2155">2155</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2156"

><td id="2156"><a href="#2156">2156</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2157"

><td id="2157"><a href="#2157">2157</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2158"

><td id="2158"><a href="#2158">2158</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2159"

><td id="2159"><a href="#2159">2159</a></td></tr
><tr id="gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2160"

><td id="2160"><a href="#2160">2160</a></td></tr
></table></pre>
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
</td>
<td id="lines">
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
<pre class="prettyprint lang-js"><table id="src_table_0"><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1

><td class="source">﻿// needs Markdown.Converter.js at the moment<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_3

><td class="source">(function () {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_4

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_5

><td class="source">    var util = {},<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_6

><td class="source">        position = {},<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_7

><td class="source">        ui = {},<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_8

><td class="source">        doc = window.document,<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_9

><td class="source">        re = window.RegExp,<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_10

><td class="source">        nav = window.navigator,<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_11

><td class="source">        SETTINGS = { lineLength: 72 },<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_12

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_13

><td class="source">    // Used to work around some browser bugs where we can&#39;t use feature testing.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_14

><td class="source">        uaSniffed = {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_15

><td class="source">            isIE: /msie/.test(nav.userAgent.toLowerCase()),<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_16

><td class="source">            isIE_5or6: /msie 6/.test(nav.userAgent.toLowerCase()) || /msie 5/.test(nav.userAgent.toLowerCase()),<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_17

><td class="source">            isOpera: /opera/.test(nav.userAgent.toLowerCase())<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_18

><td class="source">        };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_19

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_20

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_21

><td class="source">    // -------------------------------------------------------------------<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_22

><td class="source">    //  YOUR CHANGES GO HERE<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_23

><td class="source">    //<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_24

><td class="source">    // I&#39;ve tried to localize the things you are likely to change to <br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_25

><td class="source">    // this area.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_26

><td class="source">    // -------------------------------------------------------------------<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_27

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_28

><td class="source">    // The text that appears on the upper part of the dialog box when<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_29

><td class="source">    // entering links.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_30

><td class="source">    var linkDialogText = &quot;&lt;p&gt;&lt;b&gt;Insert Hyperlink&lt;/b&gt;&lt;/p&gt;&lt;p&gt;http://example.com/ \&quot;optional title\&quot;&lt;/p&gt;&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_31

><td class="source">    var imageDialogText = &quot;&lt;p&gt;&lt;b&gt;Insert Image&lt;/b&gt;&lt;/p&gt;&lt;p&gt;http://example.com/images/diagram.jpg \&quot;optional title\&quot;&lt;br&gt;&lt;br&gt;Need &lt;a href=&#39;http://www.google.com/search?q=free+image+hosting&#39; target=&#39;_blank&#39;&gt;free image hosting?&lt;/a&gt;&lt;/p&gt;&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_32

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_33

><td class="source">    // The default text that appears in the dialog input box when entering<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_34

><td class="source">    // links.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_35

><td class="source">    var imageDefaultText = &quot;http://&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_36

><td class="source">    var linkDefaultText = &quot;http://&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_37

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_38

><td class="source">    var defaultHelpHoverTitle = &quot;Markdown Editing Help&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_39

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_40

><td class="source">    // -------------------------------------------------------------------<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_41

><td class="source">    //  END OF YOUR CHANGES<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_42

><td class="source">    // -------------------------------------------------------------------<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_43

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_44

><td class="source">    // help, if given, should have a property &quot;handler&quot;, the click handler for the help button,<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_45

><td class="source">    // and can have an optional property &quot;title&quot; for the button&#39;s tooltip (defaults to &quot;Markdown Editing Help&quot;).<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_46

><td class="source">    // If help isn&#39;t given, not help button is created.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_47

><td class="source">    //<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_48

><td class="source">    // The constructed editor object has the methods:<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_49

><td class="source">    // - getConverter() returns the markdown converter object that was passed to the constructor<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_50

><td class="source">    // - run() actually starts the editor; should be called after all necessary plugins are registered. Calling this more than once is a no-op.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_51

><td class="source">    // - refreshPreview() forces the preview to be updated. This method is only available after run() was called.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_52

><td class="source">    Markdown.Editor = function (markdownConverter, idPostfix, help) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_53

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_54

><td class="source">        idPostfix = idPostfix || &quot;&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_55

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_56

><td class="source">        var hooks = this.hooks = new Markdown.HookCollection();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_57

><td class="source">        hooks.addNoop(&quot;onPreviewRefresh&quot;);       // called with no arguments after the preview has been refreshed<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_58

><td class="source">        hooks.addNoop(&quot;postBlockquoteCreation&quot;); // called with the user&#39;s selection *after* the blockquote was created; should return the actual to-be-inserted text<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_59

><td class="source">        hooks.addFalse(&quot;insertImageDialog&quot;);     /* called with one parameter: a callback to be called with the URL of the image. If the application creates<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_60

><td class="source">                                                  * its own image insertion dialog, this hook should return true, and the callback should be called with the chosen<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_61

><td class="source">                                                  * image url (or null if the user cancelled). If this hook returns false, the default dialog will be used.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_62

><td class="source">                                                  */<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_63

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_64

><td class="source">        this.getConverter = function () { return markdownConverter; }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_65

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_66

><td class="source">        var that = this,<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_67

><td class="source">            panels;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_68

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_69

><td class="source">        this.run = function () {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_70

><td class="source">            if (panels)<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_71

><td class="source">                return; // already initialized<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_72

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_73

><td class="source">            panels = new PanelCollection(idPostfix);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_74

><td class="source">            var commandManager = new CommandManager(hooks);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_75

><td class="source">            var previewManager = new PreviewManager(markdownConverter, panels, function () { hooks.onPreviewRefresh(); });<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_76

><td class="source">            var undoManager, uiManager;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_77

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_78

><td class="source">            if (!/\?noundo/.test(doc.location.href)) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_79

><td class="source">                undoManager = new UndoManager(function () {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_80

><td class="source">                    previewManager.refresh();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_81

><td class="source">                    if (uiManager) // not available on the first call<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_82

><td class="source">                        uiManager.setUndoRedoButtonStates();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_83

><td class="source">                }, panels);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_84

><td class="source">                this.textOperation = function (f) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_85

><td class="source">                    undoManager.setCommandMode();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_86

><td class="source">                    f();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_87

><td class="source">                    that.refreshPreview();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_88

><td class="source">                }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_89

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_90

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_91

><td class="source">            uiManager = new UIManager(idPostfix, panels, undoManager, previewManager, commandManager, help);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_92

><td class="source">            uiManager.setUndoRedoButtonStates();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_93

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_94

><td class="source">            var forceRefresh = that.refreshPreview = function () { previewManager.refresh(true); };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_95

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_96

><td class="source">            forceRefresh();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_97

><td class="source">        };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_98

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_99

><td class="source">    }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_100

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_101

><td class="source">    // before: contains all the text in the input box BEFORE the selection.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_102

><td class="source">    // after: contains all the text in the input box AFTER the selection.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_103

><td class="source">    function Chunks() { }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_104

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_105

><td class="source">    // startRegex: a regular expression to find the start tag<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_106

><td class="source">    // endRegex: a regular expresssion to find the end tag<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_107

><td class="source">    Chunks.prototype.findTags = function (startRegex, endRegex) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_108

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_109

><td class="source">        var chunkObj = this;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_110

><td class="source">        var regex;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_111

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_112

><td class="source">        if (startRegex) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_113

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_114

><td class="source">            regex = util.extendRegExp(startRegex, &quot;&quot;, &quot;$&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_115

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_116

><td class="source">            this.before = this.before.replace(regex,<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_117

><td class="source">                function (match) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_118

><td class="source">                    chunkObj.startTag = chunkObj.startTag + match;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_119

><td class="source">                    return &quot;&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_120

><td class="source">                });<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_121

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_122

><td class="source">            regex = util.extendRegExp(startRegex, &quot;^&quot;, &quot;&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_123

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_124

><td class="source">            this.selection = this.selection.replace(regex,<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_125

><td class="source">                function (match) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_126

><td class="source">                    chunkObj.startTag = chunkObj.startTag + match;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_127

><td class="source">                    return &quot;&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_128

><td class="source">                });<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_129

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_130

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_131

><td class="source">        if (endRegex) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_132

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_133

><td class="source">            regex = util.extendRegExp(endRegex, &quot;&quot;, &quot;$&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_134

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_135

><td class="source">            this.selection = this.selection.replace(regex,<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_136

><td class="source">                function (match) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_137

><td class="source">                    chunkObj.endTag = match + chunkObj.endTag;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_138

><td class="source">                    return &quot;&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_139

><td class="source">                });<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_140

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_141

><td class="source">            regex = util.extendRegExp(endRegex, &quot;^&quot;, &quot;&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_142

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_143

><td class="source">            this.after = this.after.replace(regex,<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_144

><td class="source">                function (match) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_145

><td class="source">                    chunkObj.endTag = match + chunkObj.endTag;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_146

><td class="source">                    return &quot;&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_147

><td class="source">                });<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_148

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_149

><td class="source">    };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_150

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_151

><td class="source">    // If remove is false, the whitespace is transferred<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_152

><td class="source">    // to the before/after regions.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_153

><td class="source">    //<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_154

><td class="source">    // If remove is true, the whitespace disappears.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_155

><td class="source">    Chunks.prototype.trimWhitespace = function (remove) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_156

><td class="source">        var beforeReplacer, afterReplacer, that = this;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_157

><td class="source">        if (remove) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_158

><td class="source">            beforeReplacer = afterReplacer = &quot;&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_159

><td class="source">        } else {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_160

><td class="source">            beforeReplacer = function (s) { that.before += s; return &quot;&quot;; }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_161

><td class="source">            afterReplacer = function (s) { that.after = s + that.after; return &quot;&quot;; }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_162

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_163

><td class="source">        <br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_164

><td class="source">        this.selection = this.selection.replace(/^(\s*)/, beforeReplacer).replace(/(\s*)$/, afterReplacer);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_165

><td class="source">    };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_166

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_167

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_168

><td class="source">    Chunks.prototype.skipLines = function (nLinesBefore, nLinesAfter, findExtraNewlines) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_169

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_170

><td class="source">        if (nLinesBefore === undefined) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_171

><td class="source">            nLinesBefore = 1;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_172

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_173

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_174

><td class="source">        if (nLinesAfter === undefined) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_175

><td class="source">            nLinesAfter = 1;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_176

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_177

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_178

><td class="source">        nLinesBefore++;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_179

><td class="source">        nLinesAfter++;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_180

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_181

><td class="source">        var regexText;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_182

><td class="source">        var replacementText;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_183

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_184

><td class="source">        // chrome bug ... documented at: http://meta.stackoverflow.com/questions/63307/blockquote-glitch-in-editor-in-chrome-6-and-7/65985#65985<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_185

><td class="source">        if (navigator.userAgent.match(/Chrome/)) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_186

><td class="source">            &quot;X&quot;.match(/()./);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_187

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_188

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_189

><td class="source">        this.selection = this.selection.replace(/(^\n*)/, &quot;&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_190

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_191

><td class="source">        this.startTag = this.startTag + re.$1;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_192

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_193

><td class="source">        this.selection = this.selection.replace(/(\n*$)/, &quot;&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_194

><td class="source">        this.endTag = this.endTag + re.$1;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_195

><td class="source">        this.startTag = this.startTag.replace(/(^\n*)/, &quot;&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_196

><td class="source">        this.before = this.before + re.$1;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_197

><td class="source">        this.endTag = this.endTag.replace(/(\n*$)/, &quot;&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_198

><td class="source">        this.after = this.after + re.$1;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_199

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_200

><td class="source">        if (this.before) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_201

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_202

><td class="source">            regexText = replacementText = &quot;&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_203

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_204

><td class="source">            while (nLinesBefore--) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_205

><td class="source">                regexText += &quot;\\n?&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_206

><td class="source">                replacementText += &quot;\n&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_207

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_208

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_209

><td class="source">            if (findExtraNewlines) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_210

><td class="source">                regexText = &quot;\\n*&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_211

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_212

><td class="source">            this.before = this.before.replace(new re(regexText + &quot;$&quot;, &quot;&quot;), replacementText);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_213

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_214

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_215

><td class="source">        if (this.after) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_216

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_217

><td class="source">            regexText = replacementText = &quot;&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_218

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_219

><td class="source">            while (nLinesAfter--) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_220

><td class="source">                regexText += &quot;\\n?&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_221

><td class="source">                replacementText += &quot;\n&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_222

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_223

><td class="source">            if (findExtraNewlines) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_224

><td class="source">                regexText = &quot;\\n*&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_225

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_226

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_227

><td class="source">            this.after = this.after.replace(new re(regexText, &quot;&quot;), replacementText);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_228

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_229

><td class="source">    };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_230

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_231

><td class="source">    // end of Chunks <br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_232

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_233

><td class="source">    // A collection of the important regions on the page.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_234

><td class="source">    // Cached so we don&#39;t have to keep traversing the DOM.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_235

><td class="source">    // Also holds ieCachedRange and ieCachedScrollTop, where necessary; working around<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_236

><td class="source">    // this issue:<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_237

><td class="source">    // Internet explorer has problems with CSS sprite buttons that use HTML<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_238

><td class="source">    // lists.  When you click on the background image &quot;button&quot;, IE will <br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_239

><td class="source">    // select the non-existent link text and discard the selection in the<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_240

><td class="source">    // textarea.  The solution to this is to cache the textarea selection<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_241

><td class="source">    // on the button&#39;s mousedown event and set a flag.  In the part of the<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_242

><td class="source">    // code where we need to grab the selection, we check for the flag<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_243

><td class="source">    // and, if it&#39;s set, use the cached area instead of querying the<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_244

><td class="source">    // textarea.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_245

><td class="source">    //<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_246

><td class="source">    // This ONLY affects Internet Explorer (tested on versions 6, 7<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_247

><td class="source">    // and 8) and ONLY on button clicks.  Keyboard shortcuts work<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_248

><td class="source">    // normally since the focus never leaves the textarea.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_249

><td class="source">    function PanelCollection(postfix) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_250

><td class="source">        this.buttonBar = doc.getElementById(&quot;wmd-button-bar&quot; + postfix);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_251

><td class="source">        this.preview = doc.getElementById(&quot;wmd-preview&quot; + postfix);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_252

><td class="source">        this.input = doc.getElementById(&quot;wmd-input&quot; + postfix);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_253

><td class="source">    };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_254

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_255

><td class="source">    // Returns true if the DOM element is visible, false if it&#39;s hidden.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_256

><td class="source">    // Checks if display is anything other than none.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_257

><td class="source">    util.isVisible = function (elem) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_258

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_259

><td class="source">        if (window.getComputedStyle) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_260

><td class="source">            // Most browsers<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_261

><td class="source">            return window.getComputedStyle(elem, null).getPropertyValue(&quot;display&quot;) !== &quot;none&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_262

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_263

><td class="source">        else if (elem.currentStyle) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_264

><td class="source">            // IE<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_265

><td class="source">            return elem.currentStyle[&quot;display&quot;] !== &quot;none&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_266

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_267

><td class="source">    };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_268

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_269

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_270

><td class="source">    // Adds a listener callback to a DOM element which is fired on a specified<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_271

><td class="source">    // event.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_272

><td class="source">    util.addEvent = function (elem, event, listener) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_273

><td class="source">        if (elem.attachEvent) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_274

><td class="source">            // IE only.  The &quot;on&quot; is mandatory.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_275

><td class="source">            elem.attachEvent(&quot;on&quot; + event, listener);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_276

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_277

><td class="source">        else {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_278

><td class="source">            // Other browsers.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_279

><td class="source">            elem.addEventListener(event, listener, false);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_280

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_281

><td class="source">    };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_282

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_283

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_284

><td class="source">    // Removes a listener callback from a DOM element which is fired on a specified<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_285

><td class="source">    // event.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_286

><td class="source">    util.removeEvent = function (elem, event, listener) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_287

><td class="source">        if (elem.detachEvent) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_288

><td class="source">            // IE only.  The &quot;on&quot; is mandatory.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_289

><td class="source">            elem.detachEvent(&quot;on&quot; + event, listener);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_290

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_291

><td class="source">        else {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_292

><td class="source">            // Other browsers.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_293

><td class="source">            elem.removeEventListener(event, listener, false);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_294

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_295

><td class="source">    };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_296

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_297

><td class="source">    // Converts \r\n and \r to \n.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_298

><td class="source">    util.fixEolChars = function (text) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_299

><td class="source">        text = text.replace(/\r\n/g, &quot;\n&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_300

><td class="source">        text = text.replace(/\r/g, &quot;\n&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_301

><td class="source">        return text;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_302

><td class="source">    };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_303

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_304

><td class="source">    // Extends a regular expression.  Returns a new RegExp<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_305

><td class="source">    // using pre + regex + post as the expression.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_306

><td class="source">    // Used in a few functions where we have a base<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_307

><td class="source">    // expression and we want to pre- or append some<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_308

><td class="source">    // conditions to it (e.g. adding &quot;$&quot; to the end).<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_309

><td class="source">    // The flags are unchanged.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_310

><td class="source">    //<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_311

><td class="source">    // regex is a RegExp, pre and post are strings.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_312

><td class="source">    util.extendRegExp = function (regex, pre, post) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_313

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_314

><td class="source">        if (pre === null || pre === undefined) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_315

><td class="source">            pre = &quot;&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_316

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_317

><td class="source">        if (post === null || post === undefined) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_318

><td class="source">            post = &quot;&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_319

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_320

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_321

><td class="source">        var pattern = regex.toString();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_322

><td class="source">        var flags;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_323

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_324

><td class="source">        // Replace the flags with empty space and store them.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_325

><td class="source">        pattern = pattern.replace(/\/([gim]*)$/, function (wholeMatch, flagsPart) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_326

><td class="source">            flags = flagsPart;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_327

><td class="source">            return &quot;&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_328

><td class="source">        });<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_329

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_330

><td class="source">        // Remove the slash delimiters on the regular expression.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_331

><td class="source">        pattern = pattern.replace(/(^\/|\/$)/g, &quot;&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_332

><td class="source">        pattern = pre + pattern + post;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_333

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_334

><td class="source">        return new re(pattern, flags);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_335

><td class="source">    }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_336

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_337

><td class="source">    // UNFINISHED<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_338

><td class="source">    // The assignment in the while loop makes jslint cranky.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_339

><td class="source">    // I&#39;ll change it to a better loop later.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_340

><td class="source">    position.getTop = function (elem, isInner) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_341

><td class="source">        var result = elem.offsetTop;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_342

><td class="source">        if (!isInner) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_343

><td class="source">            while (elem = elem.offsetParent) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_344

><td class="source">                result += elem.offsetTop;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_345

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_346

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_347

><td class="source">        return result;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_348

><td class="source">    };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_349

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_350

><td class="source">    position.getHeight = function (elem) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_351

><td class="source">        return elem.offsetHeight || elem.scrollHeight;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_352

><td class="source">    };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_353

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_354

><td class="source">    position.getWidth = function (elem) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_355

><td class="source">        return elem.offsetWidth || elem.scrollWidth;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_356

><td class="source">    };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_357

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_358

><td class="source">    position.getPageSize = function () {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_359

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_360

><td class="source">        var scrollWidth, scrollHeight;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_361

><td class="source">        var innerWidth, innerHeight;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_362

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_363

><td class="source">        // It&#39;s not very clear which blocks work with which browsers.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_364

><td class="source">        if (self.innerHeight &amp;&amp; self.scrollMaxY) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_365

><td class="source">            scrollWidth = doc.body.scrollWidth;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_366

><td class="source">            scrollHeight = self.innerHeight + self.scrollMaxY;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_367

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_368

><td class="source">        else if (doc.body.scrollHeight &gt; doc.body.offsetHeight) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_369

><td class="source">            scrollWidth = doc.body.scrollWidth;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_370

><td class="source">            scrollHeight = doc.body.scrollHeight;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_371

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_372

><td class="source">        else {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_373

><td class="source">            scrollWidth = doc.body.offsetWidth;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_374

><td class="source">            scrollHeight = doc.body.offsetHeight;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_375

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_376

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_377

><td class="source">        if (self.innerHeight) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_378

><td class="source">            // Non-IE browser<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_379

><td class="source">            innerWidth = self.innerWidth;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_380

><td class="source">            innerHeight = self.innerHeight;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_381

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_382

><td class="source">        else if (doc.documentElement &amp;&amp; doc.documentElement.clientHeight) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_383

><td class="source">            // Some versions of IE (IE 6 w/ a DOCTYPE declaration)<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_384

><td class="source">            innerWidth = doc.documentElement.clientWidth;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_385

><td class="source">            innerHeight = doc.documentElement.clientHeight;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_386

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_387

><td class="source">        else if (doc.body) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_388

><td class="source">            // Other versions of IE<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_389

><td class="source">            innerWidth = doc.body.clientWidth;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_390

><td class="source">            innerHeight = doc.body.clientHeight;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_391

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_392

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_393

><td class="source">        var maxWidth = Math.max(scrollWidth, innerWidth);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_394

><td class="source">        var maxHeight = Math.max(scrollHeight, innerHeight);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_395

><td class="source">        return [maxWidth, maxHeight, innerWidth, innerHeight];<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_396

><td class="source">    };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_397

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_398

><td class="source">    // Handles pushing and popping TextareaStates for undo/redo commands.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_399

><td class="source">    // I should rename the stack variables to list.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_400

><td class="source">    function UndoManager(callback, panels) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_401

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_402

><td class="source">        var undoObj = this;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_403

><td class="source">        var undoStack = []; // A stack of undo states<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_404

><td class="source">        var stackPtr = 0; // The index of the current state<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_405

><td class="source">        var mode = &quot;none&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_406

><td class="source">        var lastState; // The last state<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_407

><td class="source">        var timer; // The setTimeout handle for cancelling the timer<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_408

><td class="source">        var inputStateObj;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_409

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_410

><td class="source">        // Set the mode for later logic steps.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_411

><td class="source">        var setMode = function (newMode, noSave) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_412

><td class="source">            if (mode != newMode) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_413

><td class="source">                mode = newMode;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_414

><td class="source">                if (!noSave) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_415

><td class="source">                    saveState();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_416

><td class="source">                }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_417

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_418

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_419

><td class="source">            if (!uaSniffed.isIE || mode != &quot;moving&quot;) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_420

><td class="source">                timer = setTimeout(refreshState, 1);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_421

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_422

><td class="source">            else {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_423

><td class="source">                inputStateObj = null;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_424

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_425

><td class="source">        };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_426

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_427

><td class="source">        var refreshState = function (isInitialState) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_428

><td class="source">            inputStateObj = new TextareaState(panels, isInitialState);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_429

><td class="source">            timer = undefined;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_430

><td class="source">        };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_431

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_432

><td class="source">        this.setCommandMode = function () {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_433

><td class="source">            mode = &quot;command&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_434

><td class="source">            saveState();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_435

><td class="source">            timer = setTimeout(refreshState, 0);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_436

><td class="source">        };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_437

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_438

><td class="source">        this.canUndo = function () {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_439

><td class="source">            return stackPtr &gt; 1;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_440

><td class="source">        };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_441

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_442

><td class="source">        this.canRedo = function () {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_443

><td class="source">            if (undoStack[stackPtr + 1]) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_444

><td class="source">                return true;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_445

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_446

><td class="source">            return false;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_447

><td class="source">        };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_448

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_449

><td class="source">        // Removes the last state and restores it.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_450

><td class="source">        this.undo = function () {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_451

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_452

><td class="source">            if (undoObj.canUndo()) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_453

><td class="source">                if (lastState) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_454

><td class="source">                    // What about setting state -1 to null or checking for undefined?<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_455

><td class="source">                    lastState.restore();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_456

><td class="source">                    lastState = null;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_457

><td class="source">                }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_458

><td class="source">                else {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_459

><td class="source">                    undoStack[stackPtr] = new TextareaState(panels);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_460

><td class="source">                    undoStack[--stackPtr].restore();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_461

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_462

><td class="source">                    if (callback) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_463

><td class="source">                        callback();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_464

><td class="source">                    }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_465

><td class="source">                }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_466

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_467

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_468

><td class="source">            mode = &quot;none&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_469

><td class="source">            panels.input.focus();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_470

><td class="source">            refreshState();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_471

><td class="source">        };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_472

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_473

><td class="source">        // Redo an action.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_474

><td class="source">        this.redo = function () {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_475

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_476

><td class="source">            if (undoObj.canRedo()) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_477

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_478

><td class="source">                undoStack[++stackPtr].restore();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_479

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_480

><td class="source">                if (callback) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_481

><td class="source">                    callback();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_482

><td class="source">                }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_483

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_484

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_485

><td class="source">            mode = &quot;none&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_486

><td class="source">            panels.input.focus();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_487

><td class="source">            refreshState();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_488

><td class="source">        };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_489

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_490

><td class="source">        // Push the input area state to the stack.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_491

><td class="source">        var saveState = function () {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_492

><td class="source">            var currState = inputStateObj || new TextareaState(panels);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_493

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_494

><td class="source">            if (!currState) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_495

><td class="source">                return false;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_496

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_497

><td class="source">            if (mode == &quot;moving&quot;) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_498

><td class="source">                if (!lastState) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_499

><td class="source">                    lastState = currState;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_500

><td class="source">                }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_501

><td class="source">                return;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_502

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_503

><td class="source">            if (lastState) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_504

><td class="source">                if (undoStack[stackPtr - 1].text != lastState.text) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_505

><td class="source">                    undoStack[stackPtr++] = lastState;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_506

><td class="source">                }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_507

><td class="source">                lastState = null;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_508

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_509

><td class="source">            undoStack[stackPtr++] = currState;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_510

><td class="source">            undoStack[stackPtr + 1] = null;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_511

><td class="source">            if (callback) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_512

><td class="source">                callback();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_513

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_514

><td class="source">        };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_515

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_516

><td class="source">        var handleCtrlYZ = function (event) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_517

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_518

><td class="source">            var handled = false;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_519

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_520

><td class="source">            if (event.ctrlKey || event.metaKey) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_521

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_522

><td class="source">                // IE and Opera do not support charCode.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_523

><td class="source">                var keyCode = event.charCode || event.keyCode;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_524

><td class="source">                var keyCodeChar = String.fromCharCode(keyCode);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_525

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_526

><td class="source">                switch (keyCodeChar) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_527

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_528

><td class="source">                    case &quot;y&quot;:<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_529

><td class="source">                        undoObj.redo();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_530

><td class="source">                        handled = true;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_531

><td class="source">                        break;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_532

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_533

><td class="source">                    case &quot;z&quot;:<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_534

><td class="source">                        if (!event.shiftKey) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_535

><td class="source">                            undoObj.undo();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_536

><td class="source">                        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_537

><td class="source">                        else {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_538

><td class="source">                            undoObj.redo();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_539

><td class="source">                        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_540

><td class="source">                        handled = true;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_541

><td class="source">                        break;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_542

><td class="source">                }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_543

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_544

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_545

><td class="source">            if (handled) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_546

><td class="source">                if (event.preventDefault) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_547

><td class="source">                    event.preventDefault();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_548

><td class="source">                }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_549

><td class="source">                if (window.event) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_550

><td class="source">                    window.event.returnValue = false;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_551

><td class="source">                }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_552

><td class="source">                return;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_553

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_554

><td class="source">        };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_555

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_556

><td class="source">        // Set the mode depending on what is going on in the input area.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_557

><td class="source">        var handleModeChange = function (event) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_558

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_559

><td class="source">            if (!event.ctrlKey &amp;&amp; !event.metaKey) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_560

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_561

><td class="source">                var keyCode = event.keyCode;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_562

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_563

><td class="source">                if ((keyCode &gt;= 33 &amp;&amp; keyCode &lt;= 40) || (keyCode &gt;= 63232 &amp;&amp; keyCode &lt;= 63235)) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_564

><td class="source">                    // 33 - 40: page up/dn and arrow keys<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_565

><td class="source">                    // 63232 - 63235: page up/dn and arrow keys on safari<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_566

><td class="source">                    setMode(&quot;moving&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_567

><td class="source">                }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_568

><td class="source">                else if (keyCode == 8 || keyCode == 46 || keyCode == 127) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_569

><td class="source">                    // 8: backspace<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_570

><td class="source">                    // 46: delete<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_571

><td class="source">                    // 127: delete<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_572

><td class="source">                    setMode(&quot;deleting&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_573

><td class="source">                }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_574

><td class="source">                else if (keyCode == 13) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_575

><td class="source">                    // 13: Enter<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_576

><td class="source">                    setMode(&quot;newlines&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_577

><td class="source">                }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_578

><td class="source">                else if (keyCode == 27) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_579

><td class="source">                    // 27: escape<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_580

><td class="source">                    setMode(&quot;escape&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_581

><td class="source">                }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_582

><td class="source">                else if ((keyCode &lt; 16 || keyCode &gt; 20) &amp;&amp; keyCode != 91) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_583

><td class="source">                    // 16-20 are shift, etc. <br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_584

><td class="source">                    // 91: left window key<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_585

><td class="source">                    // I think this might be a little messed up since there are<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_586

><td class="source">                    // a lot of nonprinting keys above 20.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_587

><td class="source">                    setMode(&quot;typing&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_588

><td class="source">                }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_589

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_590

><td class="source">        };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_591

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_592

><td class="source">        var setEventHandlers = function () {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_593

><td class="source">            util.addEvent(panels.input, &quot;keypress&quot;, function (event) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_594

><td class="source">                // keyCode 89: y<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_595

><td class="source">                // keyCode 90: z<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_596

><td class="source">                if ((event.ctrlKey || event.metaKey) &amp;&amp; (event.keyCode == 89 || event.keyCode == 90)) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_597

><td class="source">                    event.preventDefault();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_598

><td class="source">                }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_599

><td class="source">            });<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_600

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_601

><td class="source">            var handlePaste = function () {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_602

><td class="source">                if (uaSniffed.isIE || (inputStateObj &amp;&amp; inputStateObj.text != panels.input.value)) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_603

><td class="source">                    if (timer == undefined) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_604

><td class="source">                        mode = &quot;paste&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_605

><td class="source">                        saveState();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_606

><td class="source">                        refreshState();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_607

><td class="source">                    }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_608

><td class="source">                }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_609

><td class="source">            };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_610

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_611

><td class="source">            util.addEvent(panels.input, &quot;keydown&quot;, handleCtrlYZ);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_612

><td class="source">            util.addEvent(panels.input, &quot;keydown&quot;, handleModeChange);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_613

><td class="source">            util.addEvent(panels.input, &quot;mousedown&quot;, function () {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_614

><td class="source">                setMode(&quot;moving&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_615

><td class="source">            });<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_616

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_617

><td class="source">            panels.input.onpaste = handlePaste;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_618

><td class="source">            panels.input.ondrop = handlePaste;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_619

><td class="source">        };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_620

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_621

><td class="source">        var init = function () {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_622

><td class="source">            setEventHandlers();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_623

><td class="source">            refreshState(true);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_624

><td class="source">            saveState();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_625

><td class="source">        };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_626

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_627

><td class="source">        init();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_628

><td class="source">    }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_629

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_630

><td class="source">    // end of UndoManager<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_631

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_632

><td class="source">    // The input textarea state/contents.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_633

><td class="source">    // This is used to implement undo/redo by the undo manager.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_634

><td class="source">    function TextareaState(panels, isInitialState) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_635

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_636

><td class="source">        // Aliases<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_637

><td class="source">        var stateObj = this;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_638

><td class="source">        var inputArea = panels.input;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_639

><td class="source">        this.init = function () {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_640

><td class="source">            if (!util.isVisible(inputArea)) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_641

><td class="source">                return;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_642

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_643

><td class="source">            if (!isInitialState &amp;&amp; doc.activeElement &amp;&amp; doc.activeElement !== inputArea) { // this happens when tabbing out of the input box<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_644

><td class="source">                return;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_645

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_646

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_647

><td class="source">            this.setInputAreaSelectionStartEnd();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_648

><td class="source">            this.scrollTop = inputArea.scrollTop;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_649

><td class="source">            if (!this.text &amp;&amp; inputArea.selectionStart || inputArea.selectionStart === 0) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_650

><td class="source">                this.text = inputArea.value;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_651

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_652

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_653

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_654

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_655

><td class="source">        // Sets the selected text in the input box after we&#39;ve performed an<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_656

><td class="source">        // operation.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_657

><td class="source">        this.setInputAreaSelection = function () {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_658

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_659

><td class="source">            if (!util.isVisible(inputArea)) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_660

><td class="source">                return;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_661

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_662

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_663

><td class="source">            if (inputArea.selectionStart !== undefined &amp;&amp; !uaSniffed.isOpera) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_664

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_665

><td class="source">                inputArea.focus();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_666

><td class="source">                inputArea.selectionStart = stateObj.start;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_667

><td class="source">                inputArea.selectionEnd = stateObj.end;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_668

><td class="source">                inputArea.scrollTop = stateObj.scrollTop;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_669

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_670

><td class="source">            else if (doc.selection) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_671

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_672

><td class="source">                if (doc.activeElement &amp;&amp; doc.activeElement !== inputArea) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_673

><td class="source">                    return;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_674

><td class="source">                }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_675

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_676

><td class="source">                inputArea.focus();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_677

><td class="source">                var range = inputArea.createTextRange();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_678

><td class="source">                range.moveStart(&quot;character&quot;, -inputArea.value.length);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_679

><td class="source">                range.moveEnd(&quot;character&quot;, -inputArea.value.length);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_680

><td class="source">                range.moveEnd(&quot;character&quot;, stateObj.end);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_681

><td class="source">                range.moveStart(&quot;character&quot;, stateObj.start);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_682

><td class="source">                range.select();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_683

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_684

><td class="source">        };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_685

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_686

><td class="source">        this.setInputAreaSelectionStartEnd = function () {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_687

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_688

><td class="source">            if (!panels.ieCachedRange &amp;&amp; (inputArea.selectionStart || inputArea.selectionStart === 0)) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_689

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_690

><td class="source">                stateObj.start = inputArea.selectionStart;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_691

><td class="source">                stateObj.end = inputArea.selectionEnd;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_692

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_693

><td class="source">            else if (doc.selection) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_694

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_695

><td class="source">                stateObj.text = util.fixEolChars(inputArea.value);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_696

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_697

><td class="source">                // IE loses the selection in the textarea when buttons are<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_698

><td class="source">                // clicked.  On IE we cache the selection. Here, if something is cached,<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_699

><td class="source">                // we take it.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_700

><td class="source">                var range = panels.ieCachedRange || doc.selection.createRange();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_701

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_702

><td class="source">                var fixedRange = util.fixEolChars(range.text);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_703

><td class="source">                var marker = &quot;\x07&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_704

><td class="source">                var markedRange = marker + fixedRange + marker;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_705

><td class="source">                range.text = markedRange;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_706

><td class="source">                var inputText = util.fixEolChars(inputArea.value);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_707

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_708

><td class="source">                range.moveStart(&quot;character&quot;, -markedRange.length);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_709

><td class="source">                range.text = fixedRange;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_710

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_711

><td class="source">                stateObj.start = inputText.indexOf(marker);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_712

><td class="source">                stateObj.end = inputText.lastIndexOf(marker) - marker.length;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_713

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_714

><td class="source">                var len = stateObj.text.length - util.fixEolChars(inputArea.value).length;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_715

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_716

><td class="source">                if (len) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_717

><td class="source">                    range.moveStart(&quot;character&quot;, -fixedRange.length);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_718

><td class="source">                    while (len--) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_719

><td class="source">                        fixedRange += &quot;\n&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_720

><td class="source">                        stateObj.end += 1;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_721

><td class="source">                    }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_722

><td class="source">                    range.text = fixedRange;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_723

><td class="source">                }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_724

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_725

><td class="source">                if (panels.ieCachedRange)<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_726

><td class="source">                    stateObj.scrollTop = panels.ieCachedScrollTop; // this is set alongside with ieCachedRange<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_727

><td class="source">                <br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_728

><td class="source">                panels.ieCachedRange = null;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_729

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_730

><td class="source">                this.setInputAreaSelection();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_731

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_732

><td class="source">        };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_733

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_734

><td class="source">        // Restore this state into the input area.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_735

><td class="source">        this.restore = function () {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_736

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_737

><td class="source">            if (stateObj.text != undefined &amp;&amp; stateObj.text != inputArea.value) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_738

><td class="source">                inputArea.value = stateObj.text;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_739

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_740

><td class="source">            this.setInputAreaSelection();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_741

><td class="source">            inputArea.scrollTop = stateObj.scrollTop;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_742

><td class="source">        };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_743

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_744

><td class="source">        // Gets a collection of HTML chunks from the inptut textarea.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_745

><td class="source">        this.getChunks = function () {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_746

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_747

><td class="source">            var chunk = new Chunks();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_748

><td class="source">            chunk.before = util.fixEolChars(stateObj.text.substring(0, stateObj.start));<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_749

><td class="source">            chunk.startTag = &quot;&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_750

><td class="source">            chunk.selection = util.fixEolChars(stateObj.text.substring(stateObj.start, stateObj.end));<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_751

><td class="source">            chunk.endTag = &quot;&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_752

><td class="source">            chunk.after = util.fixEolChars(stateObj.text.substring(stateObj.end));<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_753

><td class="source">            chunk.scrollTop = stateObj.scrollTop;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_754

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_755

><td class="source">            return chunk;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_756

><td class="source">        };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_757

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_758

><td class="source">        // Sets the TextareaState properties given a chunk of markdown.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_759

><td class="source">        this.setChunks = function (chunk) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_760

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_761

><td class="source">            chunk.before = chunk.before + chunk.startTag;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_762

><td class="source">            chunk.after = chunk.endTag + chunk.after;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_763

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_764

><td class="source">            this.start = chunk.before.length;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_765

><td class="source">            this.end = chunk.before.length + chunk.selection.length;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_766

><td class="source">            this.text = chunk.before + chunk.selection + chunk.after;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_767

><td class="source">            this.scrollTop = chunk.scrollTop;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_768

><td class="source">        };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_769

><td class="source">        this.init();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_770

><td class="source">    };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_771

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_772

><td class="source">    function PreviewManager(converter, panels, previewRefreshCallback) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_773

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_774

><td class="source">        var managerObj = this;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_775

><td class="source">        var timeout;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_776

><td class="source">        var elapsedTime;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_777

><td class="source">        var oldInputText;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_778

><td class="source">        var maxDelay = 3000;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_779

><td class="source">        var startType = &quot;delayed&quot;; // The other legal value is &quot;manual&quot;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_780

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_781

><td class="source">        // Adds event listeners to elements<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_782

><td class="source">        var setupEvents = function (inputElem, listener) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_783

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_784

><td class="source">            util.addEvent(inputElem, &quot;input&quot;, listener);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_785

><td class="source">            inputElem.onpaste = listener;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_786

><td class="source">            inputElem.ondrop = listener;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_787

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_788

><td class="source">            util.addEvent(inputElem, &quot;keypress&quot;, listener);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_789

><td class="source">            util.addEvent(inputElem, &quot;keydown&quot;, listener);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_790

><td class="source">        };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_791

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_792

><td class="source">        var getDocScrollTop = function () {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_793

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_794

><td class="source">            var result = 0;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_795

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_796

><td class="source">            if (window.innerHeight) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_797

><td class="source">                result = window.pageYOffset;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_798

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_799

><td class="source">            else<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_800

><td class="source">                if (doc.documentElement &amp;&amp; doc.documentElement.scrollTop) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_801

><td class="source">                    result = doc.documentElement.scrollTop;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_802

><td class="source">                }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_803

><td class="source">                else<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_804

><td class="source">                    if (doc.body) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_805

><td class="source">                        result = doc.body.scrollTop;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_806

><td class="source">                    }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_807

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_808

><td class="source">            return result;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_809

><td class="source">        };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_810

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_811

><td class="source">        var makePreviewHtml = function () {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_812

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_813

><td class="source">            // If there is no registered preview panel<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_814

><td class="source">            // there is nothing to do.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_815

><td class="source">            if (!panels.preview)<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_816

><td class="source">                return;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_817

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_818

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_819

><td class="source">            var text = panels.input.value;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_820

><td class="source">            if (text &amp;&amp; text == oldInputText) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_821

><td class="source">                return; // Input text hasn&#39;t changed.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_822

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_823

><td class="source">            else {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_824

><td class="source">                oldInputText = text;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_825

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_826

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_827

><td class="source">            var prevTime = new Date().getTime();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_828

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_829

><td class="source">            text = converter.makeHtml(text);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_830

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_831

><td class="source">            // Calculate the processing time of the HTML creation.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_832

><td class="source">            // It&#39;s used as the delay time in the event listener.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_833

><td class="source">            var currTime = new Date().getTime();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_834

><td class="source">            elapsedTime = currTime - prevTime;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_835

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_836

><td class="source">            pushPreviewHtml(text);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_837

><td class="source">        };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_838

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_839

><td class="source">        // setTimeout is already used.  Used as an event listener.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_840

><td class="source">        var applyTimeout = function () {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_841

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_842

><td class="source">            if (timeout) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_843

><td class="source">                clearTimeout(timeout);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_844

><td class="source">                timeout = undefined;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_845

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_846

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_847

><td class="source">            if (startType !== &quot;manual&quot;) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_848

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_849

><td class="source">                var delay = 0;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_850

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_851

><td class="source">                if (startType === &quot;delayed&quot;) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_852

><td class="source">                    delay = elapsedTime;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_853

><td class="source">                }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_854

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_855

><td class="source">                if (delay &gt; maxDelay) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_856

><td class="source">                    delay = maxDelay;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_857

><td class="source">                }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_858

><td class="source">                timeout = setTimeout(makePreviewHtml, delay);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_859

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_860

><td class="source">        };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_861

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_862

><td class="source">        var getScaleFactor = function (panel) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_863

><td class="source">            if (panel.scrollHeight &lt;= panel.clientHeight) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_864

><td class="source">                return 1;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_865

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_866

><td class="source">            return panel.scrollTop / (panel.scrollHeight - panel.clientHeight);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_867

><td class="source">        };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_868

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_869

><td class="source">        var setPanelScrollTops = function () {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_870

><td class="source">            if (panels.preview) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_871

><td class="source">                panels.preview.scrollTop = (panels.preview.scrollHeight - panels.preview.clientHeight) * getScaleFactor(panels.preview);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_872

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_873

><td class="source">        };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_874

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_875

><td class="source">        this.refresh = function (requiresRefresh) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_876

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_877

><td class="source">            if (requiresRefresh) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_878

><td class="source">                oldInputText = &quot;&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_879

><td class="source">                makePreviewHtml();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_880

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_881

><td class="source">            else {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_882

><td class="source">                applyTimeout();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_883

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_884

><td class="source">        };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_885

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_886

><td class="source">        this.processingTime = function () {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_887

><td class="source">            return elapsedTime;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_888

><td class="source">        };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_889

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_890

><td class="source">        var isFirstTimeFilled = true;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_891

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_892

><td class="source">        // IE doesn&#39;t let you use innerHTML if the element is contained somewhere in a table<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_893

><td class="source">        // (which is the case for inline editing) -- in that case, detach the element, set the<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_894

><td class="source">        // value, and reattach. Yes, that *is* ridiculous.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_895

><td class="source">        var ieSafePreviewSet = function (text) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_896

><td class="source">            var preview = panels.preview;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_897

><td class="source">            var parent = preview.parentNode;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_898

><td class="source">            var sibling = preview.nextSibling;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_899

><td class="source">            parent.removeChild(preview);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_900

><td class="source">            preview.innerHTML = text;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_901

><td class="source">            if (!sibling)<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_902

><td class="source">                parent.appendChild(preview);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_903

><td class="source">            else<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_904

><td class="source">                parent.insertBefore(preview, sibling);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_905

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_906

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_907

><td class="source">        var nonSuckyBrowserPreviewSet = function (text) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_908

><td class="source">            panels.preview.innerHTML = text;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_909

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_910

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_911

><td class="source">        var previewSetter;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_912

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_913

><td class="source">        var previewSet = function (text) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_914

><td class="source">            if (previewSetter)<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_915

><td class="source">                return previewSetter(text);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_916

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_917

><td class="source">            try {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_918

><td class="source">                nonSuckyBrowserPreviewSet(text);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_919

><td class="source">                previewSetter = nonSuckyBrowserPreviewSet;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_920

><td class="source">            } catch (e) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_921

><td class="source">                previewSetter = ieSafePreviewSet;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_922

><td class="source">                previewSetter(text);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_923

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_924

><td class="source">        };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_925

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_926

><td class="source">        var pushPreviewHtml = function (text) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_927

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_928

><td class="source">            var emptyTop = position.getTop(panels.input) - getDocScrollTop();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_929

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_930

><td class="source">            if (panels.preview) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_931

><td class="source">                previewSet(text);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_932

><td class="source">                previewRefreshCallback();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_933

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_934

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_935

><td class="source">            setPanelScrollTops();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_936

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_937

><td class="source">            if (isFirstTimeFilled) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_938

><td class="source">                isFirstTimeFilled = false;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_939

><td class="source">                return;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_940

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_941

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_942

><td class="source">            var fullTop = position.getTop(panels.input) - getDocScrollTop();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_943

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_944

><td class="source">            if (uaSniffed.isIE) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_945

><td class="source">                setTimeout(function () {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_946

><td class="source">                    window.scrollBy(0, fullTop - emptyTop);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_947

><td class="source">                }, 0);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_948

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_949

><td class="source">            else {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_950

><td class="source">                window.scrollBy(0, fullTop - emptyTop);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_951

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_952

><td class="source">        };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_953

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_954

><td class="source">        var init = function () {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_955

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_956

><td class="source">            setupEvents(panels.input, applyTimeout);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_957

><td class="source">            makePreviewHtml();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_958

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_959

><td class="source">            if (panels.preview) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_960

><td class="source">                panels.preview.scrollTop = 0;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_961

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_962

><td class="source">        };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_963

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_964

><td class="source">        init();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_965

><td class="source">    };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_966

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_967

><td class="source">    // Creates the background behind the hyperlink text entry box.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_968

><td class="source">    // And download dialog<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_969

><td class="source">    // Most of this has been moved to CSS but the div creation and<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_970

><td class="source">    // browser-specific hacks remain here.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_971

><td class="source">    ui.createBackground = function () {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_972

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_973

><td class="source">        var background = doc.createElement(&quot;div&quot;),<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_974

><td class="source">            style = background.style;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_975

><td class="source">        <br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_976

><td class="source">        background.className = &quot;wmd-prompt-background&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_977

><td class="source">        <br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_978

><td class="source">        style.position = &quot;absolute&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_979

><td class="source">        style.top = &quot;0&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_980

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_981

><td class="source">        style.zIndex = &quot;1000&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_982

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_983

><td class="source">        if (uaSniffed.isIE) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_984

><td class="source">            style.filter = &quot;alpha(opacity=50)&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_985

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_986

><td class="source">        else {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_987

><td class="source">            style.opacity = &quot;0.5&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_988

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_989

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_990

><td class="source">        var pageSize = position.getPageSize();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_991

><td class="source">        style.height = pageSize[1] + &quot;px&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_992

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_993

><td class="source">        if (uaSniffed.isIE) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_994

><td class="source">            style.left = doc.documentElement.scrollLeft;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_995

><td class="source">            style.width = doc.documentElement.clientWidth;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_996

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_997

><td class="source">        else {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_998

><td class="source">            style.left = &quot;0&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_999

><td class="source">            style.width = &quot;100%&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1000

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1001

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1002

><td class="source">        doc.body.appendChild(background);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1003

><td class="source">        return background;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1004

><td class="source">    };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1005

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1006

><td class="source">    // This simulates a modal dialog box and asks for the URL when you<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1007

><td class="source">    // click the hyperlink or image buttons.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1008

><td class="source">    //<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1009

><td class="source">    // text: The html for the input box.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1010

><td class="source">    // defaultInputText: The default value that appears in the input box.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1011

><td class="source">    // callback: The function which is executed when the prompt is dismissed, either via OK or Cancel.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1012

><td class="source">    //      It receives a single argument; either the entered text (if OK was chosen) or null (if Cancel<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1013

><td class="source">    //      was chosen).<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1014

><td class="source">    ui.prompt = function (text, defaultInputText, callback) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1015

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1016

><td class="source">        // These variables need to be declared at this level since they are used<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1017

><td class="source">        // in multiple functions.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1018

><td class="source">        var dialog;         // The dialog box.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1019

><td class="source">        var input;         // The text box where you enter the hyperlink.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1020

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1021

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1022

><td class="source">        if (defaultInputText === undefined) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1023

><td class="source">            defaultInputText = &quot;&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1024

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1025

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1026

><td class="source">        // Used as a keydown event handler. Esc dismisses the prompt.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1027

><td class="source">        // Key code 27 is ESC.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1028

><td class="source">        var checkEscape = function (key) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1029

><td class="source">            var code = (key.charCode || key.keyCode);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1030

><td class="source">            if (code === 27) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1031

><td class="source">                close(true);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1032

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1033

><td class="source">        };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1034

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1035

><td class="source">        // Dismisses the hyperlink input box.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1036

><td class="source">        // isCancel is true if we don&#39;t care about the input text.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1037

><td class="source">        // isCancel is false if we are going to keep the text.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1038

><td class="source">        var close = function (isCancel) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1039

><td class="source">            util.removeEvent(doc.body, &quot;keydown&quot;, checkEscape);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1040

><td class="source">            var text = input.value;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1041

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1042

><td class="source">            if (isCancel) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1043

><td class="source">                text = null;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1044

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1045

><td class="source">            else {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1046

><td class="source">                // Fixes common pasting errors.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1047

><td class="source">                text = text.replace(/^http:\/\/(https?|ftp):\/\//, &#39;$1://&#39;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1048

><td class="source">                if (!/^(?:https?|ftp):\/\//.test(text))<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1049

><td class="source">                    text = &#39;http://&#39; + text;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1050

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1051

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1052

><td class="source">            dialog.parentNode.removeChild(dialog);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1053

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1054

><td class="source">            callback(text);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1055

><td class="source">            return false;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1056

><td class="source">        };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1057

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1058

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1059

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1060

><td class="source">        // Create the text input box form/window.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1061

><td class="source">        var createDialog = function () {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1062

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1063

><td class="source">            // The main dialog box.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1064

><td class="source">            dialog = doc.createElement(&quot;div&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1065

><td class="source">            dialog.className = &quot;wmd-prompt-dialog&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1066

><td class="source">            dialog.style.padding = &quot;10px;&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1067

><td class="source">            dialog.style.position = &quot;fixed&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1068

><td class="source">            dialog.style.width = &quot;400px&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1069

><td class="source">            dialog.style.zIndex = &quot;1001&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1070

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1071

><td class="source">            // The dialog text.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1072

><td class="source">            var question = doc.createElement(&quot;div&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1073

><td class="source">            question.innerHTML = text;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1074

><td class="source">            question.style.padding = &quot;5px&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1075

><td class="source">            dialog.appendChild(question);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1076

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1077

><td class="source">            // The web form container for the text box and buttons.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1078

><td class="source">            var form = doc.createElement(&quot;form&quot;),<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1079

><td class="source">                style = form.style;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1080

><td class="source">            form.onsubmit = function () { return close(false); };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1081

><td class="source">            style.padding = &quot;0&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1082

><td class="source">            style.margin = &quot;0&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1083

><td class="source">            style.cssFloat = &quot;left&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1084

><td class="source">            style.width = &quot;100%&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1085

><td class="source">            style.textAlign = &quot;center&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1086

><td class="source">            style.position = &quot;relative&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1087

><td class="source">            dialog.appendChild(form);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1088

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1089

><td class="source">            // The input text box<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1090

><td class="source">            input = doc.createElement(&quot;input&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1091

><td class="source">            input.type = &quot;text&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1092

><td class="source">            input.value = defaultInputText;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1093

><td class="source">            style = input.style;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1094

><td class="source">            style.display = &quot;block&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1095

><td class="source">            style.width = &quot;80%&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1096

><td class="source">            style.marginLeft = style.marginRight = &quot;auto&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1097

><td class="source">            form.appendChild(input);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1098

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1099

><td class="source">            // The ok button<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1100

><td class="source">            var okButton = doc.createElement(&quot;input&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1101

><td class="source">            okButton.type = &quot;button&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1102

><td class="source">            okButton.onclick = function () { return close(false); };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1103

><td class="source">            okButton.value = &quot;OK&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1104

><td class="source">            style = okButton.style;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1105

><td class="source">            style.margin = &quot;10px&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1106

><td class="source">            style.display = &quot;inline&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1107

><td class="source">            style.width = &quot;7em&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1108

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1109

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1110

><td class="source">            // The cancel button<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1111

><td class="source">            var cancelButton = doc.createElement(&quot;input&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1112

><td class="source">            cancelButton.type = &quot;button&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1113

><td class="source">            cancelButton.onclick = function () { return close(true); };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1114

><td class="source">            cancelButton.value = &quot;Cancel&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1115

><td class="source">            style = cancelButton.style;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1116

><td class="source">            style.margin = &quot;10px&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1117

><td class="source">            style.display = &quot;inline&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1118

><td class="source">            style.width = &quot;7em&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1119

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1120

><td class="source">            form.appendChild(okButton);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1121

><td class="source">            form.appendChild(cancelButton);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1122

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1123

><td class="source">            util.addEvent(doc.body, &quot;keydown&quot;, checkEscape);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1124

><td class="source">            dialog.style.top = &quot;50%&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1125

><td class="source">            dialog.style.left = &quot;50%&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1126

><td class="source">            dialog.style.display = &quot;block&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1127

><td class="source">            if (uaSniffed.isIE_5or6) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1128

><td class="source">                dialog.style.position = &quot;absolute&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1129

><td class="source">                dialog.style.top = doc.documentElement.scrollTop + 200 + &quot;px&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1130

><td class="source">                dialog.style.left = &quot;50%&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1131

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1132

><td class="source">            doc.body.appendChild(dialog);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1133

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1134

><td class="source">            // This has to be done AFTER adding the dialog to the form if you<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1135

><td class="source">            // want it to be centered.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1136

><td class="source">            dialog.style.marginTop = -(position.getHeight(dialog) / 2) + &quot;px&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1137

><td class="source">            dialog.style.marginLeft = -(position.getWidth(dialog) / 2) + &quot;px&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1138

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1139

><td class="source">        };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1140

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1141

><td class="source">        // Why is this in a zero-length timeout?<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1142

><td class="source">        // Is it working around a browser bug?<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1143

><td class="source">        setTimeout(function () {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1144

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1145

><td class="source">            createDialog();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1146

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1147

><td class="source">            var defTextLen = defaultInputText.length;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1148

><td class="source">            if (input.selectionStart !== undefined) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1149

><td class="source">                input.selectionStart = 0;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1150

><td class="source">                input.selectionEnd = defTextLen;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1151

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1152

><td class="source">            else if (input.createTextRange) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1153

><td class="source">                var range = input.createTextRange();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1154

><td class="source">                range.collapse(false);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1155

><td class="source">                range.moveStart(&quot;character&quot;, -defTextLen);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1156

><td class="source">                range.moveEnd(&quot;character&quot;, defTextLen);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1157

><td class="source">                range.select();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1158

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1159

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1160

><td class="source">            input.focus();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1161

><td class="source">        }, 0);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1162

><td class="source">    };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1163

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1164

><td class="source">    function UIManager(postfix, panels, undoManager, previewManager, commandManager, helpOptions) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1165

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1166

><td class="source">        var inputBox = panels.input,<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1167

><td class="source">            buttons = {}; // buttons.undo, buttons.link, etc. The actual DOM elements.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1168

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1169

><td class="source">        makeSpritedButtonRow();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1170

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1171

><td class="source">        var keyEvent = &quot;keydown&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1172

><td class="source">        if (uaSniffed.isOpera) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1173

><td class="source">            keyEvent = &quot;keypress&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1174

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1175

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1176

><td class="source">        util.addEvent(inputBox, keyEvent, function (key) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1177

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1178

><td class="source">            // Check to see if we have a button key and, if so execute the callback.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1179

><td class="source">            if ((key.ctrlKey || key.metaKey) &amp;&amp; !key.altKey &amp;&amp; !key.shiftKey) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1180

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1181

><td class="source">                var keyCode = key.charCode || key.keyCode;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1182

><td class="source">                var keyCodeStr = String.fromCharCode(keyCode).toLowerCase();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1183

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1184

><td class="source">                switch (keyCodeStr) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1185

><td class="source">                    case &quot;b&quot;:<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1186

><td class="source">                        doClick(buttons.bold);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1187

><td class="source">                        break;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1188

><td class="source">                    case &quot;i&quot;:<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1189

><td class="source">                        doClick(buttons.italic);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1190

><td class="source">                        break;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1191

><td class="source">                    case &quot;l&quot;:<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1192

><td class="source">                        doClick(buttons.link);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1193

><td class="source">                        break;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1194

><td class="source">                    case &quot;q&quot;:<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1195

><td class="source">                        doClick(buttons.quote);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1196

><td class="source">                        break;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1197

><td class="source">                    case &quot;k&quot;:<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1198

><td class="source">                        doClick(buttons.code);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1199

><td class="source">                        break;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1200

><td class="source">                    case &quot;g&quot;:<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1201

><td class="source">                        doClick(buttons.image);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1202

><td class="source">                        break;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1203

><td class="source">                    case &quot;o&quot;:<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1204

><td class="source">                        doClick(buttons.olist);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1205

><td class="source">                        break;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1206

><td class="source">                    case &quot;u&quot;:<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1207

><td class="source">                        doClick(buttons.ulist);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1208

><td class="source">                        break;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1209

><td class="source">                    case &quot;h&quot;:<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1210

><td class="source">                        doClick(buttons.heading);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1211

><td class="source">                        break;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1212

><td class="source">                    case &quot;r&quot;:<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1213

><td class="source">                        doClick(buttons.hr);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1214

><td class="source">                        break;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1215

><td class="source">                    case &quot;y&quot;:<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1216

><td class="source">                        doClick(buttons.redo);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1217

><td class="source">                        break;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1218

><td class="source">                    case &quot;z&quot;:<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1219

><td class="source">                        if (key.shiftKey) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1220

><td class="source">                            doClick(buttons.redo);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1221

><td class="source">                        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1222

><td class="source">                        else {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1223

><td class="source">                            doClick(buttons.undo);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1224

><td class="source">                        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1225

><td class="source">                        break;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1226

><td class="source">                    default:<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1227

><td class="source">                        return;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1228

><td class="source">                }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1229

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1230

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1231

><td class="source">                if (key.preventDefault) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1232

><td class="source">                    key.preventDefault();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1233

><td class="source">                }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1234

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1235

><td class="source">                if (window.event) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1236

><td class="source">                    window.event.returnValue = false;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1237

><td class="source">                }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1238

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1239

><td class="source">        });<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1240

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1241

><td class="source">        // Auto-indent on shift-enter<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1242

><td class="source">        util.addEvent(inputBox, &quot;keyup&quot;, function (key) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1243

><td class="source">            if (key.shiftKey &amp;&amp; !key.ctrlKey &amp;&amp; !key.metaKey) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1244

><td class="source">                var keyCode = key.charCode || key.keyCode;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1245

><td class="source">                // Character 13 is Enter<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1246

><td class="source">                if (keyCode === 13) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1247

><td class="source">                    var fakeButton = {};<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1248

><td class="source">                    fakeButton.textOp = bindCommand(&quot;doAutoindent&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1249

><td class="source">                    doClick(fakeButton);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1250

><td class="source">                }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1251

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1252

><td class="source">        });<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1253

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1254

><td class="source">        // special handler because IE clears the context of the textbox on ESC<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1255

><td class="source">        if (uaSniffed.isIE) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1256

><td class="source">            util.addEvent(inputBox, &quot;keydown&quot;, function (key) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1257

><td class="source">                var code = key.keyCode;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1258

><td class="source">                if (code === 27) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1259

><td class="source">                    return false;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1260

><td class="source">                }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1261

><td class="source">            });<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1262

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1263

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1264

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1265

><td class="source">        // Perform the button&#39;s action.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1266

><td class="source">        function doClick(button) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1267

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1268

><td class="source">            inputBox.focus();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1269

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1270

><td class="source">            if (button.textOp) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1271

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1272

><td class="source">                if (undoManager) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1273

><td class="source">                    undoManager.setCommandMode();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1274

><td class="source">                }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1275

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1276

><td class="source">                var state = new TextareaState(panels);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1277

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1278

><td class="source">                if (!state) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1279

><td class="source">                    return;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1280

><td class="source">                }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1281

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1282

><td class="source">                var chunks = state.getChunks();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1283

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1284

><td class="source">                // Some commands launch a &quot;modal&quot; prompt dialog.  Javascript<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1285

><td class="source">                // can&#39;t really make a modal dialog box and the WMD code<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1286

><td class="source">                // will continue to execute while the dialog is displayed.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1287

><td class="source">                // This prevents the dialog pattern I&#39;m used to and means<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1288

><td class="source">                // I can&#39;t do something like this:<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1289

><td class="source">                //<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1290

><td class="source">                // var link = CreateLinkDialog();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1291

><td class="source">                // makeMarkdownLink(link);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1292

><td class="source">                // <br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1293

><td class="source">                // Instead of this straightforward method of handling a<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1294

><td class="source">                // dialog I have to pass any code which would execute<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1295

><td class="source">                // after the dialog is dismissed (e.g. link creation)<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1296

><td class="source">                // in a function parameter.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1297

><td class="source">                //<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1298

><td class="source">                // Yes this is awkward and I think it sucks, but there&#39;s<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1299

><td class="source">                // no real workaround.  Only the image and link code<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1300

><td class="source">                // create dialogs and require the function pointers.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1301

><td class="source">                var fixupInputArea = function () {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1302

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1303

><td class="source">                    inputBox.focus();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1304

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1305

><td class="source">                    if (chunks) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1306

><td class="source">                        state.setChunks(chunks);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1307

><td class="source">                    }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1308

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1309

><td class="source">                    state.restore();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1310

><td class="source">                    previewManager.refresh();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1311

><td class="source">                };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1312

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1313

><td class="source">                var noCleanup = button.textOp(chunks, fixupInputArea);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1314

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1315

><td class="source">                if (!noCleanup) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1316

><td class="source">                    fixupInputArea();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1317

><td class="source">                }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1318

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1319

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1320

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1321

><td class="source">            if (button.execute) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1322

><td class="source">                button.execute(undoManager);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1323

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1324

><td class="source">        };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1325

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1326

><td class="source">        function setupButton(button, isEnabled) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1327

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1328

><td class="source">            var normalYShift = &quot;0px&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1329

><td class="source">            var disabledYShift = &quot;-20px&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1330

><td class="source">            var highlightYShift = &quot;-40px&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1331

><td class="source">            var image = button.getElementsByTagName(&quot;span&quot;)[0];<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1332

><td class="source">            if (isEnabled) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1333

><td class="source">                image.style.backgroundPosition = button.XShift + &quot; &quot; + normalYShift;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1334

><td class="source">                button.onmouseover = function () {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1335

><td class="source">                    image.style.backgroundPosition = this.XShift + &quot; &quot; + highlightYShift;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1336

><td class="source">                };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1337

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1338

><td class="source">                button.onmouseout = function () {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1339

><td class="source">                    image.style.backgroundPosition = this.XShift + &quot; &quot; + normalYShift;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1340

><td class="source">                };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1341

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1342

><td class="source">                // IE tries to select the background image &quot;button&quot; text (it&#39;s<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1343

><td class="source">                // implemented in a list item) so we have to cache the selection<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1344

><td class="source">                // on mousedown.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1345

><td class="source">                if (uaSniffed.isIE) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1346

><td class="source">                    button.onmousedown = function () {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1347

><td class="source">                        if (doc.activeElement &amp;&amp; doc.activeElement !== panels.input) { // we&#39;re not even in the input box, so there&#39;s no selection<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1348

><td class="source">                            return;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1349

><td class="source">                        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1350

><td class="source">                        panels.ieCachedRange = document.selection.createRange();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1351

><td class="source">                        panels.ieCachedScrollTop = panels.input.scrollTop;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1352

><td class="source">                    };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1353

><td class="source">                }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1354

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1355

><td class="source">                if (!button.isHelp) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1356

><td class="source">                    button.onclick = function () {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1357

><td class="source">                        if (this.onmouseout) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1358

><td class="source">                            this.onmouseout();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1359

><td class="source">                        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1360

><td class="source">                        doClick(this);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1361

><td class="source">                        return false;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1362

><td class="source">                    }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1363

><td class="source">                }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1364

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1365

><td class="source">            else {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1366

><td class="source">                image.style.backgroundPosition = button.XShift + &quot; &quot; + disabledYShift;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1367

><td class="source">                button.onmouseover = button.onmouseout = button.onclick = function () { };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1368

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1369

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1370

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1371

><td class="source">        function bindCommand(method) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1372

><td class="source">            if (typeof method === &quot;string&quot;)<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1373

><td class="source">                method = commandManager[method];<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1374

><td class="source">            return function () { method.apply(commandManager, arguments); }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1375

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1376

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1377

><td class="source">        function makeSpritedButtonRow() {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1378

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1379

><td class="source">            var buttonBar = panels.buttonBar;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1380

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1381

><td class="source">            var normalYShift = &quot;0px&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1382

><td class="source">            var disabledYShift = &quot;-20px&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1383

><td class="source">            var highlightYShift = &quot;-40px&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1384

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1385

><td class="source">            var buttonRow = document.createElement(&quot;ul&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1386

><td class="source">            buttonRow.id = &quot;wmd-button-row&quot; + postfix;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1387

><td class="source">            buttonRow.className = &#39;wmd-button-row&#39;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1388

><td class="source">            buttonRow = buttonBar.appendChild(buttonRow);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1389

><td class="source">            var xPosition = 0;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1390

><td class="source">            var makeButton = function (id, title, XShift, textOp) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1391

><td class="source">                var button = document.createElement(&quot;li&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1392

><td class="source">                button.className = &quot;wmd-button&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1393

><td class="source">                button.style.left = xPosition + &quot;px&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1394

><td class="source">                xPosition += 25;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1395

><td class="source">                var buttonImage = document.createElement(&quot;span&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1396

><td class="source">                button.id = id + postfix;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1397

><td class="source">                button.appendChild(buttonImage);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1398

><td class="source">                button.title = title;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1399

><td class="source">                button.XShift = XShift;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1400

><td class="source">                if (textOp)<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1401

><td class="source">                    button.textOp = textOp;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1402

><td class="source">                setupButton(button, true);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1403

><td class="source">                buttonRow.appendChild(button);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1404

><td class="source">                return button;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1405

><td class="source">            };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1406

><td class="source">            var makeSpacer = function (num) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1407

><td class="source">                var spacer = document.createElement(&quot;li&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1408

><td class="source">                spacer.className = &quot;wmd-spacer wmd-spacer&quot; + num;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1409

><td class="source">                spacer.id = &quot;wmd-spacer&quot; + num + postfix;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1410

><td class="source">                buttonRow.appendChild(spacer);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1411

><td class="source">                xPosition += 25;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1412

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1413

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1414

><td class="source">            buttons.bold = makeButton(&quot;wmd-bold-button&quot;, &quot;Strong &lt;strong&gt; Ctrl+B&quot;, &quot;0px&quot;, bindCommand(&quot;doBold&quot;));<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1415

><td class="source">            buttons.italic = makeButton(&quot;wmd-italic-button&quot;, &quot;Emphasis &lt;em&gt; Ctrl+I&quot;, &quot;-20px&quot;, bindCommand(&quot;doItalic&quot;));<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1416

><td class="source">            makeSpacer(1);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1417

><td class="source">            buttons.link = makeButton(&quot;wmd-link-button&quot;, &quot;Hyperlink &lt;a&gt; Ctrl+L&quot;, &quot;-40px&quot;, bindCommand(function (chunk, postProcessing) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1418

><td class="source">                return this.doLinkOrImage(chunk, postProcessing, false);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1419

><td class="source">            }));<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1420

><td class="source">            buttons.quote = makeButton(&quot;wmd-quote-button&quot;, &quot;Blockquote &lt;blockquote&gt; Ctrl+Q&quot;, &quot;-60px&quot;, bindCommand(&quot;doBlockquote&quot;));<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1421

><td class="source">            buttons.code = makeButton(&quot;wmd-code-button&quot;, &quot;Code Sample &lt;pre&gt;&lt;code&gt; Ctrl+K&quot;, &quot;-80px&quot;, bindCommand(&quot;doCode&quot;));<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1422

><td class="source">            buttons.image = makeButton(&quot;wmd-image-button&quot;, &quot;Image &lt;img&gt; Ctrl+G&quot;, &quot;-100px&quot;, bindCommand(function (chunk, postProcessing) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1423

><td class="source">                return this.doLinkOrImage(chunk, postProcessing, true);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1424

><td class="source">            }));<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1425

><td class="source">            makeSpacer(2);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1426

><td class="source">            buttons.olist = makeButton(&quot;wmd-olist-button&quot;, &quot;Numbered List &lt;ol&gt; Ctrl+O&quot;, &quot;-120px&quot;, bindCommand(function (chunk, postProcessing) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1427

><td class="source">                this.doList(chunk, postProcessing, true);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1428

><td class="source">            }));<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1429

><td class="source">            buttons.ulist = makeButton(&quot;wmd-ulist-button&quot;, &quot;Bulleted List &lt;ul&gt; Ctrl+U&quot;, &quot;-140px&quot;, bindCommand(function (chunk, postProcessing) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1430

><td class="source">                this.doList(chunk, postProcessing, false);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1431

><td class="source">            }));<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1432

><td class="source">            buttons.heading = makeButton(&quot;wmd-heading-button&quot;, &quot;Heading &lt;h1&gt;/&lt;h2&gt; Ctrl+H&quot;, &quot;-160px&quot;, bindCommand(&quot;doHeading&quot;));<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1433

><td class="source">            buttons.hr = makeButton(&quot;wmd-hr-button&quot;, &quot;Horizontal Rule &lt;hr&gt; Ctrl+R&quot;, &quot;-180px&quot;, bindCommand(&quot;doHorizontalRule&quot;));<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1434

><td class="source">            makeSpacer(3);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1435

><td class="source">            buttons.undo = makeButton(&quot;wmd-undo-button&quot;, &quot;Undo - Ctrl+Z&quot;, &quot;-200px&quot;, null);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1436

><td class="source">            buttons.undo.execute = function (manager) { if (manager) manager.undo(); };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1437

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1438

><td class="source">            var redoTitle = /win/.test(nav.platform.toLowerCase()) ?<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1439

><td class="source">                &quot;Redo - Ctrl+Y&quot; :<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1440

><td class="source">                &quot;Redo - Ctrl+Shift+Z&quot;; // mac and other non-Windows platforms<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1441

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1442

><td class="source">            buttons.redo = makeButton(&quot;wmd-redo-button&quot;, redoTitle, &quot;-220px&quot;, null);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1443

><td class="source">            buttons.redo.execute = function (manager) { if (manager) manager.redo(); };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1444

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1445

><td class="source">            if (helpOptions) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1446

><td class="source">                var helpButton = document.createElement(&quot;li&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1447

><td class="source">                var helpButtonImage = document.createElement(&quot;span&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1448

><td class="source">                helpButton.appendChild(helpButtonImage);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1449

><td class="source">                helpButton.className = &quot;wmd-button wmd-help-button&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1450

><td class="source">                helpButton.id = &quot;wmd-help-button&quot; + postfix;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1451

><td class="source">                helpButton.XShift = &quot;-240px&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1452

><td class="source">                helpButton.isHelp = true;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1453

><td class="source">                helpButton.style.right = &quot;0px&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1454

><td class="source">                helpButton.title = helpOptions.title || defaultHelpHoverTitle;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1455

><td class="source">                helpButton.onclick = helpOptions.handler;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1456

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1457

><td class="source">                setupButton(helpButton, true);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1458

><td class="source">                buttonRow.appendChild(helpButton);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1459

><td class="source">                buttons.help = helpButton;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1460

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1461

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1462

><td class="source">            setUndoRedoButtonStates();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1463

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1464

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1465

><td class="source">        function setUndoRedoButtonStates() {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1466

><td class="source">            if (undoManager) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1467

><td class="source">                setupButton(buttons.undo, undoManager.canUndo());<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1468

><td class="source">                setupButton(buttons.redo, undoManager.canRedo());<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1469

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1470

><td class="source">        };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1471

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1472

><td class="source">        this.setUndoRedoButtonStates = setUndoRedoButtonStates;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1473

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1474

><td class="source">    }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1475

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1476

><td class="source">    function CommandManager(pluginHooks) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1477

><td class="source">        this.hooks = pluginHooks;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1478

><td class="source">    }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1479

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1480

><td class="source">    var commandProto = CommandManager.prototype;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1481

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1482

><td class="source">    // The markdown symbols - 4 spaces = code, &gt; = blockquote, etc.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1483

><td class="source">    commandProto.prefixes = &quot;(?:\\s{4,}|\\s*&gt;|\\s*-\\s+|\\s*\\d+\\.|=|\\+|-|_|\\*|#|\\s*\\[[^\n]]+\\]:)&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1484

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1485

><td class="source">    // Remove markdown symbols from the chunk selection.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1486

><td class="source">    commandProto.unwrap = function (chunk) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1487

><td class="source">        var txt = new re(&quot;([^\\n])\\n(?!(\\n|&quot; + this.prefixes + &quot;))&quot;, &quot;g&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1488

><td class="source">        chunk.selection = chunk.selection.replace(txt, &quot;$1 $2&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1489

><td class="source">    };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1490

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1491

><td class="source">    commandProto.wrap = function (chunk, len) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1492

><td class="source">        this.unwrap(chunk);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1493

><td class="source">        var regex = new re(&quot;(.{1,&quot; + len + &quot;})( +|$\\n?)&quot;, &quot;gm&quot;),<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1494

><td class="source">            that = this;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1495

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1496

><td class="source">        chunk.selection = chunk.selection.replace(regex, function (line, marked) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1497

><td class="source">            if (new re(&quot;^&quot; + that.prefixes, &quot;&quot;).test(line)) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1498

><td class="source">                return line;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1499

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1500

><td class="source">            return marked + &quot;\n&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1501

><td class="source">        });<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1502

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1503

><td class="source">        chunk.selection = chunk.selection.replace(/\s+$/, &quot;&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1504

><td class="source">    };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1505

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1506

><td class="source">    commandProto.doBold = function (chunk, postProcessing) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1507

><td class="source">        return this.doBorI(chunk, postProcessing, 2, &quot;strong text&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1508

><td class="source">    };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1509

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1510

><td class="source">    commandProto.doItalic = function (chunk, postProcessing) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1511

><td class="source">        return this.doBorI(chunk, postProcessing, 1, &quot;emphasized text&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1512

><td class="source">    };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1513

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1514

><td class="source">    // chunk: The selected region that will be enclosed with */**<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1515

><td class="source">    // nStars: 1 for italics, 2 for bold<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1516

><td class="source">    // insertText: If you just click the button without highlighting text, this gets inserted<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1517

><td class="source">    commandProto.doBorI = function (chunk, postProcessing, nStars, insertText) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1518

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1519

><td class="source">        // Get rid of whitespace and fixup newlines.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1520

><td class="source">        chunk.trimWhitespace();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1521

><td class="source">        chunk.selection = chunk.selection.replace(/\n{2,}/g, &quot;\n&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1522

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1523

><td class="source">        // Look for stars before and after.  Is the chunk already marked up?<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1524

><td class="source">        // note that these regex matches cannot fail<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1525

><td class="source">        var starsBefore = /(\**$)/.exec(chunk.before)[0];<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1526

><td class="source">        var starsAfter = /(^\**)/.exec(chunk.after)[0];<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1527

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1528

><td class="source">        var prevStars = Math.min(starsBefore.length, starsAfter.length);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1529

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1530

><td class="source">        // Remove stars if we have to since the button acts as a toggle.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1531

><td class="source">        if ((prevStars &gt;= nStars) &amp;&amp; (prevStars != 2 || nStars != 1)) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1532

><td class="source">            chunk.before = chunk.before.replace(re(&quot;[*]{&quot; + nStars + &quot;}$&quot;, &quot;&quot;), &quot;&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1533

><td class="source">            chunk.after = chunk.after.replace(re(&quot;^[*]{&quot; + nStars + &quot;}&quot;, &quot;&quot;), &quot;&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1534

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1535

><td class="source">        else if (!chunk.selection &amp;&amp; starsAfter) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1536

><td class="source">            // It&#39;s not really clear why this code is necessary.  It just moves<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1537

><td class="source">            // some arbitrary stuff around.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1538

><td class="source">            chunk.after = chunk.after.replace(/^([*_]*)/, &quot;&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1539

><td class="source">            chunk.before = chunk.before.replace(/(\s?)$/, &quot;&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1540

><td class="source">            var whitespace = re.$1;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1541

><td class="source">            chunk.before = chunk.before + starsAfter + whitespace;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1542

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1543

><td class="source">        else {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1544

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1545

><td class="source">            // In most cases, if you don&#39;t have any selected text and click the button<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1546

><td class="source">            // you&#39;ll get a selected, marked up region with the default text inserted.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1547

><td class="source">            if (!chunk.selection &amp;&amp; !starsAfter) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1548

><td class="source">                chunk.selection = insertText;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1549

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1550

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1551

><td class="source">            // Add the true markup.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1552

><td class="source">            var markup = nStars &lt;= 1 ? &quot;*&quot; : &quot;**&quot;; // shouldn&#39;t the test be = ?<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1553

><td class="source">            chunk.before = chunk.before + markup;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1554

><td class="source">            chunk.after = markup + chunk.after;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1555

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1556

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1557

><td class="source">        return;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1558

><td class="source">    };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1559

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1560

><td class="source">    commandProto.stripLinkDefs = function (text, defsToAdd) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1561

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1562

><td class="source">        text = text.replace(/^[ ]{0,3}\[(\d+)\]:[ \t]*\n?[ \t]*&lt;?(\S+?)&gt;?[ \t]*\n?[ \t]*(?:(\n*)[&quot;(](.+?)[&quot;)][ \t]*)?(?:\n+|$)/gm,<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1563

><td class="source">            function (totalMatch, id, link, newlines, title) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1564

><td class="source">                defsToAdd[id] = totalMatch.replace(/\s*$/, &quot;&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1565

><td class="source">                if (newlines) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1566

><td class="source">                    // Strip the title and return that separately.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1567

><td class="source">                    defsToAdd[id] = totalMatch.replace(/[&quot;(](.+?)[&quot;)]$/, &quot;&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1568

><td class="source">                    return newlines + title;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1569

><td class="source">                }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1570

><td class="source">                return &quot;&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1571

><td class="source">            });<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1572

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1573

><td class="source">        return text;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1574

><td class="source">    };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1575

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1576

><td class="source">    commandProto.addLinkDef = function (chunk, linkDef) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1577

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1578

><td class="source">        var refNumber = 0; // The current reference number<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1579

><td class="source">        var defsToAdd = {}; //<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1580

><td class="source">        // Start with a clean slate by removing all previous link definitions.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1581

><td class="source">        chunk.before = this.stripLinkDefs(chunk.before, defsToAdd);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1582

><td class="source">        chunk.selection = this.stripLinkDefs(chunk.selection, defsToAdd);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1583

><td class="source">        chunk.after = this.stripLinkDefs(chunk.after, defsToAdd);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1584

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1585

><td class="source">        var defs = &quot;&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1586

><td class="source">        var regex = /(\[)((?:\[[^\]]*\]|[^\[\]])*)(\][ ]?(?:\n[ ]*)?\[)(\d+)(\])/g;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1587

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1588

><td class="source">        var addDefNumber = function (def) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1589

><td class="source">            refNumber++;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1590

><td class="source">            def = def.replace(/^[ ]{0,3}\[(\d+)\]:/, &quot;  [&quot; + refNumber + &quot;]:&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1591

><td class="source">            defs += &quot;\n&quot; + def;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1592

><td class="source">        };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1593

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1594

><td class="source">        // note that<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1595

><td class="source">        // a) the recursive call to getLink cannot go infinite, because by definition<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1596

><td class="source">        //    of regex, inner is always a proper substring of wholeMatch, and<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1597

><td class="source">        // b) more than one level of nesting is neither supported by the regex<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1598

><td class="source">        //    nor making a lot of sense (the only use case for nesting is a linked image)<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1599

><td class="source">        var getLink = function (wholeMatch, before, inner, afterInner, id, end) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1600

><td class="source">            inner = inner.replace(regex, getLink);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1601

><td class="source">            if (defsToAdd[id]) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1602

><td class="source">                addDefNumber(defsToAdd[id]);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1603

><td class="source">                return before + inner + afterInner + refNumber + end;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1604

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1605

><td class="source">            return wholeMatch;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1606

><td class="source">        };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1607

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1608

><td class="source">        chunk.before = chunk.before.replace(regex, getLink);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1609

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1610

><td class="source">        if (linkDef) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1611

><td class="source">            addDefNumber(linkDef);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1612

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1613

><td class="source">        else {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1614

><td class="source">            chunk.selection = chunk.selection.replace(regex, getLink);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1615

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1616

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1617

><td class="source">        var refOut = refNumber;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1618

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1619

><td class="source">        chunk.after = chunk.after.replace(regex, getLink);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1620

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1621

><td class="source">        if (chunk.after) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1622

><td class="source">            chunk.after = chunk.after.replace(/\n*$/, &quot;&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1623

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1624

><td class="source">        if (!chunk.after) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1625

><td class="source">            chunk.selection = chunk.selection.replace(/\n*$/, &quot;&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1626

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1627

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1628

><td class="source">        chunk.after += &quot;\n\n&quot; + defs;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1629

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1630

><td class="source">        return refOut;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1631

><td class="source">    };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1632

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1633

><td class="source">    // takes the line as entered into the add link/as image dialog and makes<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1634

><td class="source">    // sure the URL and the optinal title are &quot;nice&quot;.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1635

><td class="source">    function properlyEncoded(linkdef) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1636

><td class="source">        return linkdef.replace(/^\s*(.*?)(?:\s+&quot;(.+)&quot;)?\s*$/, function (wholematch, link, title) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1637

><td class="source">            link = link.replace(/\?.*$/, function (querypart) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1638

><td class="source">                return querypart.replace(/\+/g, &quot; &quot;); // in the query string, a plus and a space are identical<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1639

><td class="source">            });<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1640

><td class="source">            link = decodeURIComponent(link); // unencode first, to prevent double encoding<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1641

><td class="source">            link = encodeURI(link).replace(/&#39;/g, &#39;%27&#39;).replace(/\(/g, &#39;%28&#39;).replace(/\)/g, &#39;%29&#39;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1642

><td class="source">            link = link.replace(/\?.*$/, function (querypart) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1643

><td class="source">                return querypart.replace(/\+/g, &quot;%2b&quot;); // since we replaced plus with spaces in the query part, all pluses that now appear where originally encoded<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1644

><td class="source">            });<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1645

><td class="source">            if (title) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1646

><td class="source">                title = title.trim ? title.trim() : title.replace(/^\s*/, &quot;&quot;).replace(/\s*$/, &quot;&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1647

><td class="source">                title = $.trim(title).replace(/&quot;/g, &quot;quot;&quot;).replace(/\(/g, &quot;&amp;#40;&quot;).replace(/\)/g, &quot;&amp;#41;&quot;).replace(/&lt;/g, &quot;&amp;lt;&quot;).replace(/&gt;/g, &quot;&amp;gt;&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1648

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1649

><td class="source">            return title ? link + &#39; &quot;&#39; + title + &#39;&quot;&#39; : link;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1650

><td class="source">        });<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1651

><td class="source">    }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1652

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1653

><td class="source">    commandProto.doLinkOrImage = function (chunk, postProcessing, isImage) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1654

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1655

><td class="source">        chunk.trimWhitespace();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1656

><td class="source">        chunk.findTags(/\s*!?\[/, /\][ ]?(?:\n[ ]*)?(\[.*?\])?/);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1657

><td class="source">        var background;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1658

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1659

><td class="source">        if (chunk.endTag.length &gt; 1 &amp;&amp; chunk.startTag.length &gt; 0) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1660

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1661

><td class="source">            chunk.startTag = chunk.startTag.replace(/!?\[/, &quot;&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1662

><td class="source">            chunk.endTag = &quot;&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1663

><td class="source">            this.addLinkDef(chunk, null);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1664

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1665

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1666

><td class="source">        else {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1667

><td class="source">            <br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1668

><td class="source">            // We&#39;re moving start and end tag back into the selection, since (as we&#39;re in the else block) we&#39;re not<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1669

><td class="source">            // *removing* a link, but *adding* one, so whatever findTags() found is now back to being part of the<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1670

><td class="source">            // link text. linkEnteredCallback takes care of escaping any brackets.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1671

><td class="source">            chunk.selection = chunk.startTag + chunk.selection + chunk.endTag;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1672

><td class="source">            chunk.startTag = chunk.endTag = &quot;&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1673

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1674

><td class="source">            if (/\n\n/.test(chunk.selection)) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1675

><td class="source">                this.addLinkDef(chunk, null);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1676

><td class="source">                return;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1677

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1678

><td class="source">            var that = this;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1679

><td class="source">            // The function to be executed when you enter a link and press OK or Cancel.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1680

><td class="source">            // Marks up the link and adds the ref.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1681

><td class="source">            var linkEnteredCallback = function (link) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1682

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1683

><td class="source">                background.parentNode.removeChild(background);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1684

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1685

><td class="source">                if (link !== null) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1686

><td class="source">                    // (                          $1<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1687

><td class="source">                    //     [^\\]                  anything that&#39;s not a backslash<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1688

><td class="source">                    //     (?:\\\\)*              an even number (this includes zero) of backslashes<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1689

><td class="source">                    // )<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1690

><td class="source">                    // (?=                        followed by<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1691

><td class="source">                    //     [[\]]                  an opening or closing bracket<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1692

><td class="source">                    // )<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1693

><td class="source">                    //<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1694

><td class="source">                    // In other words, a non-escaped bracket. These have to be escaped now to make sure they<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1695

><td class="source">                    // don&#39;t count as the end of the link or similar.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1696

><td class="source">                    // Note that the actual bracket has to be a lookahead, because (in case of to subsequent brackets),<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1697

><td class="source">                    // the bracket in one match may be the &quot;not a backslash&quot; character in the next match, so it<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1698

><td class="source">                    // should not be consumed by the first match.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1699

><td class="source">                    // The &quot;prepend a space and finally remove it&quot; steps makes sure there is a &quot;not a backslash&quot; at the<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1700

><td class="source">                    // start of the string, so this also works if the selection begins with a bracket. We cannot solve<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1701

><td class="source">                    // this by anchoring with ^, because in the case that the selection starts with two brackets, this<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1702

><td class="source">                    // would mean a zero-width match at the start. Since zero-width matches advance the string position,<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1703

><td class="source">                    // the first bracket could then not act as the &quot;not a backslash&quot; for the second.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1704

><td class="source">                    chunk.selection = (&quot; &quot; + chunk.selection).replace(/([^\\](?:\\\\)*)(?=[[\]])/g, &quot;$1\\&quot;).substr(1);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1705

><td class="source">                    <br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1706

><td class="source">                    var linkDef = &quot; [999]: &quot; + properlyEncoded(link);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1707

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1708

><td class="source">                    var num = that.addLinkDef(chunk, linkDef);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1709

><td class="source">                    chunk.startTag = isImage ? &quot;![&quot; : &quot;[&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1710

><td class="source">                    chunk.endTag = &quot;][&quot; + num + &quot;]&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1711

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1712

><td class="source">                    if (!chunk.selection) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1713

><td class="source">                        if (isImage) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1714

><td class="source">                            chunk.selection = &quot;enter image description here&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1715

><td class="source">                        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1716

><td class="source">                        else {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1717

><td class="source">                            chunk.selection = &quot;enter link description here&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1718

><td class="source">                        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1719

><td class="source">                    }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1720

><td class="source">                }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1721

><td class="source">                postProcessing();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1722

><td class="source">            };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1723

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1724

><td class="source">            background = ui.createBackground();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1725

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1726

><td class="source">            if (isImage) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1727

><td class="source">                if (!this.hooks.insertImageDialog(linkEnteredCallback))<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1728

><td class="source">                    ui.prompt(imageDialogText, imageDefaultText, linkEnteredCallback);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1729

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1730

><td class="source">            else {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1731

><td class="source">                ui.prompt(linkDialogText, linkDefaultText, linkEnteredCallback);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1732

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1733

><td class="source">            return true;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1734

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1735

><td class="source">    };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1736

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1737

><td class="source">    // When making a list, hitting shift-enter will put your cursor on the next line<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1738

><td class="source">    // at the current indent level.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1739

><td class="source">    commandProto.doAutoindent = function (chunk, postProcessing) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1740

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1741

><td class="source">        var commandMgr = this,<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1742

><td class="source">            fakeSelection = false;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1743

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1744

><td class="source">        chunk.before = chunk.before.replace(/(\n|^)[ ]{0,3}([*+-]|\d+[.])[ \t]*\n$/, &quot;\n\n&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1745

><td class="source">        chunk.before = chunk.before.replace(/(\n|^)[ ]{0,3}&gt;[ \t]*\n$/, &quot;\n\n&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1746

><td class="source">        chunk.before = chunk.before.replace(/(\n|^)[ \t]+\n$/, &quot;\n\n&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1747

><td class="source">        <br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1748

><td class="source">        // There&#39;s no selection, end the cursor wasn&#39;t at the end of the line:<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1749

><td class="source">        // The user wants to split the current list item / code line / blockquote line<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1750

><td class="source">        // (for the latter it doesn&#39;t really matter) in two. Temporarily select the<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1751

><td class="source">        // (rest of the) line to achieve this.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1752

><td class="source">        if (!chunk.selection &amp;&amp; !/^[ \t]*(?:\n|$)/.test(chunk.after)) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1753

><td class="source">            chunk.after = chunk.after.replace(/^[^\n]*/, function (wholeMatch) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1754

><td class="source">                chunk.selection = wholeMatch;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1755

><td class="source">                return &quot;&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1756

><td class="source">            });<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1757

><td class="source">            fakeSelection = true;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1758

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1759

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1760

><td class="source">        if (/(\n|^)[ ]{0,3}([*+-]|\d+[.])[ \t]+.*\n$/.test(chunk.before)) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1761

><td class="source">            if (commandMgr.doList) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1762

><td class="source">                commandMgr.doList(chunk);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1763

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1764

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1765

><td class="source">        if (/(\n|^)[ ]{0,3}&gt;[ \t]+.*\n$/.test(chunk.before)) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1766

><td class="source">            if (commandMgr.doBlockquote) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1767

><td class="source">                commandMgr.doBlockquote(chunk);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1768

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1769

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1770

><td class="source">        if (/(\n|^)(\t|[ ]{4,}).*\n$/.test(chunk.before)) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1771

><td class="source">            if (commandMgr.doCode) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1772

><td class="source">                commandMgr.doCode(chunk);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1773

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1774

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1775

><td class="source">        <br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1776

><td class="source">        if (fakeSelection) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1777

><td class="source">            chunk.after = chunk.selection + chunk.after;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1778

><td class="source">            chunk.selection = &quot;&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1779

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1780

><td class="source">    };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1781

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1782

><td class="source">    commandProto.doBlockquote = function (chunk, postProcessing) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1783

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1784

><td class="source">        chunk.selection = chunk.selection.replace(/^(\n*)([^\r]+?)(\n*)$/,<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1785

><td class="source">            function (totalMatch, newlinesBefore, text, newlinesAfter) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1786

><td class="source">                chunk.before += newlinesBefore;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1787

><td class="source">                chunk.after = newlinesAfter + chunk.after;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1788

><td class="source">                return text;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1789

><td class="source">            });<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1790

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1791

><td class="source">        chunk.before = chunk.before.replace(/(&gt;[ \t]*)$/,<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1792

><td class="source">            function (totalMatch, blankLine) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1793

><td class="source">                chunk.selection = blankLine + chunk.selection;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1794

><td class="source">                return &quot;&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1795

><td class="source">            });<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1796

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1797

><td class="source">        chunk.selection = chunk.selection.replace(/^(\s|&gt;)+$/, &quot;&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1798

><td class="source">        chunk.selection = chunk.selection || &quot;Blockquote&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1799

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1800

><td class="source">        // The original code uses a regular expression to find out how much of the<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1801

><td class="source">        // text *directly before* the selection already was a blockquote:<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1802

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1803

><td class="source">        /*<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1804

><td class="source">        if (chunk.before) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1805

><td class="source">        chunk.before = chunk.before.replace(/\n?$/, &quot;\n&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1806

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1807

><td class="source">        chunk.before = chunk.before.replace(/(((\n|^)(\n[ \t]*)*&gt;(.+\n)*.*)+(\n[ \t]*)*$)/,<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1808

><td class="source">        function (totalMatch) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1809

><td class="source">        chunk.startTag = totalMatch;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1810

><td class="source">        return &quot;&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1811

><td class="source">        });<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1812

><td class="source">        */<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1813

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1814

><td class="source">        // This comes down to:<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1815

><td class="source">        // Go backwards as many lines a possible, such that each line<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1816

><td class="source">        //  a) starts with &quot;&gt;&quot;, or<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1817

><td class="source">        //  b) is almost empty, except for whitespace, or<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1818

><td class="source">        //  c) is preceeded by an unbroken chain of non-empty lines<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1819

><td class="source">        //     leading up to a line that starts with &quot;&gt;&quot; and at least one more character<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1820

><td class="source">        // and in addition<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1821

><td class="source">        //  d) at least one line fulfills a)<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1822

><td class="source">        //<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1823

><td class="source">        // Since this is essentially a backwards-moving regex, it&#39;s susceptible to<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1824

><td class="source">        // catstrophic backtracking and can cause the browser to hang;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1825

><td class="source">        // see e.g. http://meta.stackoverflow.com/questions/9807.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1826

><td class="source">        //<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1827

><td class="source">        // Hence we replaced this by a simple state machine that just goes through the<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1828

><td class="source">        // lines and checks for a), b), and c).<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1829

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1830

><td class="source">        var match = &quot;&quot;,<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1831

><td class="source">            leftOver = &quot;&quot;,<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1832

><td class="source">            line;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1833

><td class="source">        if (chunk.before) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1834

><td class="source">            var lines = chunk.before.replace(/\n$/, &quot;&quot;).split(&quot;\n&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1835

><td class="source">            var inChain = false;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1836

><td class="source">            for (var i = 0; i &lt; lines.length; i++) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1837

><td class="source">                var good = false;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1838

><td class="source">                line = lines[i];<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1839

><td class="source">                inChain = inChain &amp;&amp; line.length &gt; 0; // c) any non-empty line continues the chain<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1840

><td class="source">                if (/^&gt;/.test(line)) {                // a)<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1841

><td class="source">                    good = true;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1842

><td class="source">                    if (!inChain &amp;&amp; line.length &gt; 1)  // c) any line that starts with &quot;&gt;&quot; and has at least one more character starts the chain<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1843

><td class="source">                        inChain = true;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1844

><td class="source">                } else if (/^[ \t]*$/.test(line)) {   // b)<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1845

><td class="source">                    good = true;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1846

><td class="source">                } else {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1847

><td class="source">                    good = inChain;                   // c) the line is not empty and does not start with &quot;&gt;&quot;, so it matches if and only if we&#39;re in the chain<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1848

><td class="source">                }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1849

><td class="source">                if (good) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1850

><td class="source">                    match += line + &quot;\n&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1851

><td class="source">                } else {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1852

><td class="source">                    leftOver += match + line;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1853

><td class="source">                    match = &quot;\n&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1854

><td class="source">                }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1855

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1856

><td class="source">            if (!/(^|\n)&gt;/.test(match)) {             // d)<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1857

><td class="source">                leftOver += match;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1858

><td class="source">                match = &quot;&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1859

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1860

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1861

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1862

><td class="source">        chunk.startTag = match;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1863

><td class="source">        chunk.before = leftOver;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1864

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1865

><td class="source">        // end of change<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1866

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1867

><td class="source">        if (chunk.after) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1868

><td class="source">            chunk.after = chunk.after.replace(/^\n?/, &quot;\n&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1869

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1870

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1871

><td class="source">        chunk.after = chunk.after.replace(/^(((\n|^)(\n[ \t]*)*&gt;(.+\n)*.*)+(\n[ \t]*)*)/,<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1872

><td class="source">            function (totalMatch) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1873

><td class="source">                chunk.endTag = totalMatch;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1874

><td class="source">                return &quot;&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1875

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1876

><td class="source">        );<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1877

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1878

><td class="source">        var replaceBlanksInTags = function (useBracket) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1879

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1880

><td class="source">            var replacement = useBracket ? &quot;&gt; &quot; : &quot;&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1881

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1882

><td class="source">            if (chunk.startTag) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1883

><td class="source">                chunk.startTag = chunk.startTag.replace(/\n((&gt;|\s)*)\n$/,<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1884

><td class="source">                    function (totalMatch, markdown) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1885

><td class="source">                        return &quot;\n&quot; + markdown.replace(/^[ ]{0,3}&gt;?[ \t]*$/gm, replacement) + &quot;\n&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1886

><td class="source">                    });<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1887

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1888

><td class="source">            if (chunk.endTag) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1889

><td class="source">                chunk.endTag = chunk.endTag.replace(/^\n((&gt;|\s)*)\n/,<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1890

><td class="source">                    function (totalMatch, markdown) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1891

><td class="source">                        return &quot;\n&quot; + markdown.replace(/^[ ]{0,3}&gt;?[ \t]*$/gm, replacement) + &quot;\n&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1892

><td class="source">                    });<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1893

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1894

><td class="source">        };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1895

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1896

><td class="source">        if (/^(?![ ]{0,3}&gt;)/m.test(chunk.selection)) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1897

><td class="source">            this.wrap(chunk, SETTINGS.lineLength - 2);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1898

><td class="source">            chunk.selection = chunk.selection.replace(/^/gm, &quot;&gt; &quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1899

><td class="source">            replaceBlanksInTags(true);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1900

><td class="source">            chunk.skipLines();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1901

><td class="source">        } else {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1902

><td class="source">            chunk.selection = chunk.selection.replace(/^[ ]{0,3}&gt; ?/gm, &quot;&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1903

><td class="source">            this.unwrap(chunk);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1904

><td class="source">            replaceBlanksInTags(false);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1905

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1906

><td class="source">            if (!/^(\n|^)[ ]{0,3}&gt;/.test(chunk.selection) &amp;&amp; chunk.startTag) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1907

><td class="source">                chunk.startTag = chunk.startTag.replace(/\n{0,2}$/, &quot;\n\n&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1908

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1909

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1910

><td class="source">            if (!/(\n|^)[ ]{0,3}&gt;.*$/.test(chunk.selection) &amp;&amp; chunk.endTag) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1911

><td class="source">                chunk.endTag = chunk.endTag.replace(/^\n{0,2}/, &quot;\n\n&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1912

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1913

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1914

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1915

><td class="source">        chunk.selection = this.hooks.postBlockquoteCreation(chunk.selection);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1916

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1917

><td class="source">        if (!/\n/.test(chunk.selection)) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1918

><td class="source">            chunk.selection = chunk.selection.replace(/^(&gt; *)/,<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1919

><td class="source">            function (wholeMatch, blanks) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1920

><td class="source">                chunk.startTag += blanks;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1921

><td class="source">                return &quot;&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1922

><td class="source">            });<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1923

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1924

><td class="source">    };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1925

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1926

><td class="source">    commandProto.doCode = function (chunk, postProcessing) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1927

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1928

><td class="source">        var hasTextBefore = /\S[ ]*$/.test(chunk.before);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1929

><td class="source">        var hasTextAfter = /^[ ]*\S/.test(chunk.after);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1930

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1931

><td class="source">        // Use &#39;four space&#39; markdown if the selection is on its own<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1932

><td class="source">        // line or is multiline.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1933

><td class="source">        if ((!hasTextAfter &amp;&amp; !hasTextBefore) || /\n/.test(chunk.selection)) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1934

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1935

><td class="source">            chunk.before = chunk.before.replace(/[ ]{4}$/,<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1936

><td class="source">                function (totalMatch) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1937

><td class="source">                    chunk.selection = totalMatch + chunk.selection;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1938

><td class="source">                    return &quot;&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1939

><td class="source">                });<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1940

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1941

><td class="source">            var nLinesBack = 1;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1942

><td class="source">            var nLinesForward = 1;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1943

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1944

><td class="source">            if (/(\n|^)(\t|[ ]{4,}).*\n$/.test(chunk.before)) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1945

><td class="source">                nLinesBack = 0;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1946

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1947

><td class="source">            if (/^\n(\t|[ ]{4,})/.test(chunk.after)) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1948

><td class="source">                nLinesForward = 0;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1949

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1950

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1951

><td class="source">            chunk.skipLines(nLinesBack, nLinesForward);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1952

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1953

><td class="source">            if (!chunk.selection) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1954

><td class="source">                chunk.startTag = &quot;    &quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1955

><td class="source">                chunk.selection = &quot;enter code here&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1956

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1957

><td class="source">            else {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1958

><td class="source">                if (/^[ ]{0,3}\S/m.test(chunk.selection)) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1959

><td class="source">                    if (/\n/.test(chunk.selection))<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1960

><td class="source">                        chunk.selection = chunk.selection.replace(/^/gm, &quot;    &quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1961

><td class="source">                    else // if it&#39;s not multiline, do not select the four added spaces; this is more consistent with the doList behavior<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1962

><td class="source">                        chunk.before += &quot;    &quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1963

><td class="source">                }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1964

><td class="source">                else {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1965

><td class="source">                    chunk.selection = chunk.selection.replace(/^[ ]{4}/gm, &quot;&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1966

><td class="source">                }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1967

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1968

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1969

><td class="source">        else {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1970

><td class="source">            // Use backticks (`) to delimit the code block.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1971

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1972

><td class="source">            chunk.trimWhitespace();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1973

><td class="source">            chunk.findTags(/`/, /`/);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1974

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1975

><td class="source">            if (!chunk.startTag &amp;&amp; !chunk.endTag) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1976

><td class="source">                chunk.startTag = chunk.endTag = &quot;`&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1977

><td class="source">                if (!chunk.selection) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1978

><td class="source">                    chunk.selection = &quot;enter code here&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1979

><td class="source">                }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1980

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1981

><td class="source">            else if (chunk.endTag &amp;&amp; !chunk.startTag) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1982

><td class="source">                chunk.before += chunk.endTag;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1983

><td class="source">                chunk.endTag = &quot;&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1984

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1985

><td class="source">            else {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1986

><td class="source">                chunk.startTag = chunk.endTag = &quot;&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1987

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1988

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1989

><td class="source">    };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1990

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1991

><td class="source">    commandProto.doList = function (chunk, postProcessing, isNumberedList) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1992

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1993

><td class="source">        // These are identical except at the very beginning and end.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1994

><td class="source">        // Should probably use the regex extension function to make this clearer.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1995

><td class="source">        var previousItemsRegex = /(\n|^)(([ ]{0,3}([*+-]|\d+[.])[ \t]+.*)(\n.+|\n{2,}([*+-].*|\d+[.])[ \t]+.*|\n{2,}[ \t]+\S.*)*)\n*$/;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1996

><td class="source">        var nextItemsRegex = /^\n*(([ ]{0,3}([*+-]|\d+[.])[ \t]+.*)(\n.+|\n{2,}([*+-].*|\d+[.])[ \t]+.*|\n{2,}[ \t]+\S.*)*)\n*/;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1997

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1998

><td class="source">        // The default bullet is a dash but others are possible.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_1999

><td class="source">        // This has nothing to do with the particular HTML bullet,<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2000

><td class="source">        // it&#39;s just a markdown bullet.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2001

><td class="source">        var bullet = &quot;-&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2002

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2003

><td class="source">        // The number in a numbered list.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2004

><td class="source">        var num = 1;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2005

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2006

><td class="source">        // Get the item prefix - e.g. &quot; 1. &quot; for a numbered list, &quot; - &quot; for a bulleted list.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2007

><td class="source">        var getItemPrefix = function () {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2008

><td class="source">            var prefix;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2009

><td class="source">            if (isNumberedList) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2010

><td class="source">                prefix = &quot; &quot; + num + &quot;. &quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2011

><td class="source">                num++;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2012

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2013

><td class="source">            else {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2014

><td class="source">                prefix = &quot; &quot; + bullet + &quot; &quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2015

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2016

><td class="source">            return prefix;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2017

><td class="source">        };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2018

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2019

><td class="source">        // Fixes the prefixes of the other list items.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2020

><td class="source">        var getPrefixedItem = function (itemText) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2021

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2022

><td class="source">            // The numbering flag is unset when called by autoindent.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2023

><td class="source">            if (isNumberedList === undefined) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2024

><td class="source">                isNumberedList = /^\s*\d/.test(itemText);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2025

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2026

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2027

><td class="source">            // Renumber/bullet the list element.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2028

><td class="source">            itemText = itemText.replace(/^[ ]{0,3}([*+-]|\d+[.])\s/gm,<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2029

><td class="source">                function (_) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2030

><td class="source">                    return getItemPrefix();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2031

><td class="source">                });<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2032

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2033

><td class="source">            return itemText;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2034

><td class="source">        };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2035

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2036

><td class="source">        chunk.findTags(/(\n|^)*[ ]{0,3}([*+-]|\d+[.])\s+/, null);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2037

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2038

><td class="source">        if (chunk.before &amp;&amp; !/\n$/.test(chunk.before) &amp;&amp; !/^\n/.test(chunk.startTag)) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2039

><td class="source">            chunk.before += chunk.startTag;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2040

><td class="source">            chunk.startTag = &quot;&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2041

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2042

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2043

><td class="source">        if (chunk.startTag) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2044

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2045

><td class="source">            var hasDigits = /\d+[.]/.test(chunk.startTag);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2046

><td class="source">            chunk.startTag = &quot;&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2047

><td class="source">            chunk.selection = chunk.selection.replace(/\n[ ]{4}/g, &quot;\n&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2048

><td class="source">            this.unwrap(chunk);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2049

><td class="source">            chunk.skipLines();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2050

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2051

><td class="source">            if (hasDigits) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2052

><td class="source">                // Have to renumber the bullet points if this is a numbered list.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2053

><td class="source">                chunk.after = chunk.after.replace(nextItemsRegex, getPrefixedItem);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2054

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2055

><td class="source">            if (isNumberedList == hasDigits) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2056

><td class="source">                return;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2057

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2058

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2059

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2060

><td class="source">        var nLinesUp = 1;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2061

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2062

><td class="source">        chunk.before = chunk.before.replace(previousItemsRegex,<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2063

><td class="source">            function (itemText) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2064

><td class="source">                if (/^\s*([*+-])/.test(itemText)) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2065

><td class="source">                    bullet = re.$1;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2066

><td class="source">                }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2067

><td class="source">                nLinesUp = /[^\n]\n\n[^\n]/.test(itemText) ? 1 : 0;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2068

><td class="source">                return getPrefixedItem(itemText);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2069

><td class="source">            });<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2070

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2071

><td class="source">        if (!chunk.selection) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2072

><td class="source">            chunk.selection = &quot;List item&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2073

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2074

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2075

><td class="source">        var prefix = getItemPrefix();<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2076

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2077

><td class="source">        var nLinesDown = 1;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2078

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2079

><td class="source">        chunk.after = chunk.after.replace(nextItemsRegex,<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2080

><td class="source">            function (itemText) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2081

><td class="source">                nLinesDown = /[^\n]\n\n[^\n]/.test(itemText) ? 1 : 0;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2082

><td class="source">                return getPrefixedItem(itemText);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2083

><td class="source">            });<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2084

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2085

><td class="source">        chunk.trimWhitespace(true);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2086

><td class="source">        chunk.skipLines(nLinesUp, nLinesDown, true);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2087

><td class="source">        chunk.startTag = prefix;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2088

><td class="source">        var spaces = prefix.replace(/./g, &quot; &quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2089

><td class="source">        this.wrap(chunk, SETTINGS.lineLength - spaces.length);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2090

><td class="source">        chunk.selection = chunk.selection.replace(/\n/g, &quot;\n&quot; + spaces);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2091

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2092

><td class="source">    };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2093

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2094

><td class="source">    commandProto.doHeading = function (chunk, postProcessing) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2095

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2096

><td class="source">        // Remove leading/trailing whitespace and reduce internal spaces to single spaces.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2097

><td class="source">        chunk.selection = chunk.selection.replace(/\s+/g, &quot; &quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2098

><td class="source">        chunk.selection = chunk.selection.replace(/(^\s+|\s+$)/g, &quot;&quot;);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2099

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2100

><td class="source">        // If we clicked the button with no selected text, we just<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2101

><td class="source">        // make a level 2 hash header around some default text.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2102

><td class="source">        if (!chunk.selection) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2103

><td class="source">            chunk.startTag = &quot;## &quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2104

><td class="source">            chunk.selection = &quot;Heading&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2105

><td class="source">            chunk.endTag = &quot; ##&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2106

><td class="source">            return;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2107

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2108

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2109

><td class="source">        var headerLevel = 0;     // The existing header level of the selected text.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2110

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2111

><td class="source">        // Remove any existing hash heading markdown and save the header level.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2112

><td class="source">        chunk.findTags(/#+[ ]*/, /[ ]*#+/);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2113

><td class="source">        if (/#+/.test(chunk.startTag)) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2114

><td class="source">            headerLevel = re.lastMatch.length;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2115

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2116

><td class="source">        chunk.startTag = chunk.endTag = &quot;&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2117

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2118

><td class="source">        // Try to get the current header level by looking for - and = in the line<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2119

><td class="source">        // below the selection.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2120

><td class="source">        chunk.findTags(null, /\s?(-+|=+)/);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2121

><td class="source">        if (/=+/.test(chunk.endTag)) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2122

><td class="source">            headerLevel = 1;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2123

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2124

><td class="source">        if (/-+/.test(chunk.endTag)) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2125

><td class="source">            headerLevel = 2;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2126

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2127

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2128

><td class="source">        // Skip to the next line so we can create the header markdown.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2129

><td class="source">        chunk.startTag = chunk.endTag = &quot;&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2130

><td class="source">        chunk.skipLines(1, 1);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2131

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2132

><td class="source">        // We make a level 2 header if there is no current header.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2133

><td class="source">        // If there is a header level, we substract one from the header level.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2134

><td class="source">        // If it&#39;s already a level 1 header, it&#39;s removed.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2135

><td class="source">        var headerLevelToCreate = headerLevel == 0 ? 2 : headerLevel - 1;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2136

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2137

><td class="source">        if (headerLevelToCreate &gt; 0) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2138

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2139

><td class="source">            // The button only creates level 1 and 2 underline headers.<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2140

><td class="source">            // Why not have it iterate over hash header levels?  Wouldn&#39;t that be easier and cleaner?<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2141

><td class="source">            var headerChar = headerLevelToCreate &gt;= 2 ? &quot;-&quot; : &quot;=&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2142

><td class="source">            var len = chunk.selection.length;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2143

><td class="source">            if (len &gt; SETTINGS.lineLength) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2144

><td class="source">                len = SETTINGS.lineLength;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2145

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2146

><td class="source">            chunk.endTag = &quot;\n&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2147

><td class="source">            while (len--) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2148

><td class="source">                chunk.endTag += headerChar;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2149

><td class="source">            }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2150

><td class="source">        }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2151

><td class="source">    };<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2152

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2153

><td class="source">    commandProto.doHorizontalRule = function (chunk, postProcessing) {<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2154

><td class="source">        chunk.startTag = &quot;----------\n&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2155

><td class="source">        chunk.selection = &quot;&quot;;<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2156

><td class="source">        chunk.skipLines(2, 1, true);<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2157

><td class="source">    }<br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2158

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2159

><td class="source"><br></td></tr
><tr
id=sl_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_2160

><td class="source">})();<br></td></tr
></table></pre>
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
</td>
</tr></table>

 
<script type="text/javascript">
 var lineNumUnderMouse = -1;
 
 function gutterOver(num) {
 gutterOut();
 var newTR = document.getElementById('gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_' + num);
 if (newTR) {
 newTR.className = 'undermouse';
 }
 lineNumUnderMouse = num;
 }
 function gutterOut() {
 if (lineNumUnderMouse != -1) {
 var oldTR = document.getElementById(
 'gr_svn3151a581819f39123b0b5fd1ca9e26cebdcaa873_' + lineNumUnderMouse);
 if (oldTR) {
 oldTR.className = '';
 }
 lineNumUnderMouse = -1;
 }
 }
 var numsGenState = {table_base_id: 'nums_table_'};
 var srcGenState = {table_base_id: 'src_table_'};
 var alignerRunning = false;
 var startOver = false;
 function setLineNumberHeights() {
 if (alignerRunning) {
 startOver = true;
 return;
 }
 numsGenState.chunk_id = 0;
 numsGenState.table = document.getElementById('nums_table_0');
 numsGenState.row_num = 0;
 if (!numsGenState.table) {
 return; // Silently exit if no file is present.
 }
 srcGenState.chunk_id = 0;
 srcGenState.table = document.getElementById('src_table_0');
 srcGenState.row_num = 0;
 alignerRunning = true;
 continueToSetLineNumberHeights();
 }
 function rowGenerator(genState) {
 if (genState.row_num < genState.table.rows.length) {
 var currentRow = genState.table.rows[genState.row_num];
 genState.row_num++;
 return currentRow;
 }
 var newTable = document.getElementById(
 genState.table_base_id + (genState.chunk_id + 1));
 if (newTable) {
 genState.chunk_id++;
 genState.row_num = 0;
 genState.table = newTable;
 return genState.table.rows[0];
 }
 return null;
 }
 var MAX_ROWS_PER_PASS = 1000;
 function continueToSetLineNumberHeights() {
 var rowsInThisPass = 0;
 var numRow = 1;
 var srcRow = 1;
 while (numRow && srcRow && rowsInThisPass < MAX_ROWS_PER_PASS) {
 numRow = rowGenerator(numsGenState);
 srcRow = rowGenerator(srcGenState);
 rowsInThisPass++;
 if (numRow && srcRow) {
 if (numRow.offsetHeight != srcRow.offsetHeight) {
 numRow.firstChild.style.height = srcRow.offsetHeight + 'px';
 }
 }
 }
 if (rowsInThisPass >= MAX_ROWS_PER_PASS) {
 setTimeout(continueToSetLineNumberHeights, 10);
 } else {
 alignerRunning = false;
 if (startOver) {
 startOver = false;
 setTimeout(setLineNumberHeights, 500);
 }
 }
 }
 function initLineNumberHeights() {
 // Do 2 complete passes, because there can be races
 // between this code and prettify.
 startOver = true;
 setTimeout(setLineNumberHeights, 250);
 window.onresize = setLineNumberHeights;
 }
 initLineNumberHeights();
</script>

 
 
 <div id="log">
 <div style="text-align:right">
 <a class="ifCollapse" href="#" onclick="_toggleMeta(this); return false">Show details</a>
 <a class="ifExpand" href="#" onclick="_toggleMeta(this); return false">Hide details</a>
 </div>
 <div class="ifExpand">
 
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="changelog">
 <p>Change log</p>
 <div>
 <a href="/p/pagedown/source/detail?spec=svn3151a581819f39123b0b5fd1ca9e26cebdcaa873&amp;r=44a4db795617288ae9817c90735fb497891ede23">44a4db795617</a>
 by balpha
 on Mar 2, 2012
 &nbsp; <a href="/p/pagedown/source/diff?spec=svn3151a581819f39123b0b5fd1ca9e26cebdcaa873&r=44a4db795617288ae9817c90735fb497891ede23&amp;format=side&amp;path=/Markdown.Editor.js&amp;old_path=/Markdown.Editor.js&amp;old=46bb422ffaa27b3a2895ff3ce8c31f8b491fa9a9">Diff</a>
 </div>
 <pre>add a textOperation method to the editor
object for programatically changing the
input box contents</pre>
 </div>
 
 
 
 
 
 
 <script type="text/javascript">
 var detail_url = '/p/pagedown/source/detail?r=44a4db795617288ae9817c90735fb497891ede23&spec=svn3151a581819f39123b0b5fd1ca9e26cebdcaa873';
 var publish_url = '/p/pagedown/source/detail?r=44a4db795617288ae9817c90735fb497891ede23&spec=svn3151a581819f39123b0b5fd1ca9e26cebdcaa873#publish';
 // describe the paths of this revision in javascript.
 var changed_paths = [];
 var changed_urls = [];
 
 changed_paths.push('/Markdown.Editor.js');
 changed_urls.push('/p/pagedown/source/browse/Markdown.Editor.js?r\x3d44a4db795617288ae9817c90735fb497891ede23\x26spec\x3dsvn3151a581819f39123b0b5fd1ca9e26cebdcaa873');
 
 var selected_path = '/Markdown.Editor.js';
 
 
 function getCurrentPageIndex() {
 for (var i = 0; i < changed_paths.length; i++) {
 if (selected_path == changed_paths[i]) {
 return i;
 }
 }
 }
 function getNextPage() {
 var i = getCurrentPageIndex();
 if (i < changed_paths.length - 1) {
 return changed_urls[i + 1];
 }
 return null;
 }
 function getPreviousPage() {
 var i = getCurrentPageIndex();
 if (i > 0) {
 return changed_urls[i - 1];
 }
 return null;
 }
 function gotoNextPage() {
 var page = getNextPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoPreviousPage() {
 var page = getPreviousPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoDetailPage() {
 window.location = detail_url;
 }
 function gotoPublishPage() {
 window.location = publish_url;
 }
</script>

 
 <style type="text/css">
 #review_nav {
 border-top: 3px solid white;
 padding-top: 6px;
 margin-top: 1em;
 }
 #review_nav td {
 vertical-align: middle;
 }
 #review_nav select {
 margin: .5em 0;
 }
 </style>
 <div id="review_nav">
 <table><tr><td>Go to:&nbsp;</td><td>
 <select name="files_in_rev" onchange="window.location=this.value">
 
 <option value="/p/pagedown/source/browse/Markdown.Editor.js?r=44a4db795617288ae9817c90735fb497891ede23&amp;spec=svn3151a581819f39123b0b5fd1ca9e26cebdcaa873"
 selected="selected"
 >/Markdown.Editor.js</option>
 
 </select>
 </td></tr></table>
 
 
 



 <div style="white-space:nowrap">
 Project members,
 <a href="https://www.google.com/accounts/ServiceLogin?service=code&amp;ltmpl=phosting&amp;continue=http%3A%2F%2Fcode.google.com%2Fp%2Fpagedown%2Fsource%2Fbrowse%2FMarkdown.Editor.js&amp;followup=http%3A%2F%2Fcode.google.com%2Fp%2Fpagedown%2Fsource%2Fbrowse%2FMarkdown.Editor.js"
 >sign in</a> to write a code review</div>


 
 </div>
 
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="older_bubble">
 <p>Older revisions</p>
 
 
 <div class="closed" style="margin-bottom:3px;" >
 <img class="ifClosed" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/plus.gif" >
 <img class="ifOpened" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/minus.gif" >
 <a href="/p/pagedown/source/detail?spec=svn3151a581819f39123b0b5fd1ca9e26cebdcaa873&r=46bb422ffaa27b3a2895ff3ce8c31f8b491fa9a9">46bb422ffaa2</a>
 by balpha
 on Mar 2, 2012
 &nbsp; <a href="/p/pagedown/source/diff?spec=svn3151a581819f39123b0b5fd1ca9e26cebdcaa873&r=46bb422ffaa27b3a2895ff3ce8c31f8b491fa9a9&amp;format=side&amp;path=/Markdown.Editor.js&amp;old_path=/Markdown.Editor.js&amp;old=83cdda03fe717ef11812ad4093b7c03a9cd6dd80">Diff</a>
 <br>
 <pre class="ifOpened">fix empty line wrongly being inserted
in doCode in certain cases; improve
Shift-Enter behavior; improve doCode
behavior when working on a single line</pre>
 </div>
 
 <div class="closed" style="margin-bottom:3px;" >
 <img class="ifClosed" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/plus.gif" >
 <img class="ifOpened" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/minus.gif" >
 <a href="/p/pagedown/source/detail?spec=svn3151a581819f39123b0b5fd1ca9e26cebdcaa873&r=83cdda03fe717ef11812ad4093b7c03a9cd6dd80">83cdda03fe71</a>
 by balpha
 on Feb 9, 2012
 &nbsp; <a href="/p/pagedown/source/diff?spec=svn3151a581819f39123b0b5fd1ca9e26cebdcaa873&r=83cdda03fe717ef11812ad4093b7c03a9cd6dd80&amp;format=side&amp;path=/Markdown.Editor.js&amp;old_path=/Markdown.Editor.js&amp;old=ae3523dd335af5ba92168c9cc650c2856296633c">Diff</a>
 <br>
 <pre class="ifOpened">get rid of another RegExp.$1 use</pre>
 </div>
 
 <div class="closed" style="margin-bottom:3px;" >
 <img class="ifClosed" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/plus.gif" >
 <img class="ifOpened" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/minus.gif" >
 <a href="/p/pagedown/source/detail?spec=svn3151a581819f39123b0b5fd1ca9e26cebdcaa873&r=ae3523dd335af5ba92168c9cc650c2856296633c">ae3523dd335a</a>
 by balpha
 on Jan 31, 2012
 &nbsp; <a href="/p/pagedown/source/diff?spec=svn3151a581819f39123b0b5fd1ca9e26cebdcaa873&r=ae3523dd335af5ba92168c9cc650c2856296633c&amp;format=side&amp;path=/Markdown.Editor.js&amp;old_path=/Markdown.Editor.js&amp;old=46cc6b16f0b86d85cbbcb0b0136f5e13177ba434">Diff</a>
 <br>
 <pre class="ifOpened">add a missing var; cheers Tim Stone</pre>
 </div>
 
 
 <a href="/p/pagedown/source/list?path=/Markdown.Editor.js&r=44a4db795617288ae9817c90735fb497891ede23">All revisions of this file</a>
 </div>
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="fileinfo_bubble">
 <p>File info</p>
 
 <div>Size: 80863 bytes,
 2160 lines</div>
 
 <div><a href="//pagedown.googlecode.com/hg/Markdown.Editor.js">View raw file</a></div>
 </div>
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 </div>
 </div>


</div>

</div>
</div>

<script src="http://www.gstatic.com/codesite/ph/11556196549636558490/js/prettify/prettify.js"></script>
<script type="text/javascript">prettyPrint();</script>


<script src="http://www.gstatic.com/codesite/ph/11556196549636558490/js/source_file_scripts.js"></script>

 <script type="text/javascript" src="https://kibbles.googlecode.com/files/kibbles-1.3.3.comp.js"></script>
 <script type="text/javascript">
 var lastStop = null;
 var initialized = false;
 
 function updateCursor(next, prev) {
 if (prev && prev.element) {
 prev.element.className = 'cursor_stop cursor_hidden';
 }
 if (next && next.element) {
 next.element.className = 'cursor_stop cursor';
 lastStop = next.index;
 }
 }
 
 function pubRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftDestroyed(data) {
 updateCursorForCell(data.cellId, 'nocursor');
 if (initialized) {
 reloadCursors();
 }
 }
 function reloadCursors() {
 kibbles.skipper.reset();
 loadCursors();
 if (lastStop != null) {
 kibbles.skipper.setCurrentStop(lastStop);
 }
 }
 // possibly the simplest way to insert any newly added comments
 // is to update the class of the corresponding cursor row,
 // then refresh the entire list of rows.
 function updateCursorForCell(cellId, className) {
 var cell = document.getElementById(cellId);
 // we have to go two rows back to find the cursor location
 var row = getPreviousElement(cell.parentNode);
 row.className = className;
 }
 // returns the previous element, ignores text nodes.
 function getPreviousElement(e) {
 var element = e.previousSibling;
 if (element.nodeType == 3) {
 element = element.previousSibling;
 }
 if (element && element.tagName) {
 return element;
 }
 }
 function loadCursors() {
 // register our elements with skipper
 var elements = CR_getElements('*', 'cursor_stop');
 var len = elements.length;
 for (var i = 0; i < len; i++) {
 var element = elements[i]; 
 element.className = 'cursor_stop cursor_hidden';
 kibbles.skipper.append(element);
 }
 }
 function toggleComments() {
 CR_toggleCommentDisplay();
 reloadCursors();
 }
 function keysOnLoadHandler() {
 // setup skipper
 kibbles.skipper.addStopListener(
 kibbles.skipper.LISTENER_TYPE.PRE, updateCursor);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_top', 50);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_bottom', 100);
 // Register our keys
 kibbles.skipper.addFwdKey("n");
 kibbles.skipper.addRevKey("p");
 kibbles.keys.addKeyPressListener(
 'u', function() { window.location = detail_url; });
 kibbles.keys.addKeyPressListener(
 'r', function() { window.location = detail_url + '#publish'; });
 
 kibbles.keys.addKeyPressListener('j', gotoNextPage);
 kibbles.keys.addKeyPressListener('k', gotoPreviousPage);
 
 
 }
 </script>
<script src="http://www.gstatic.com/codesite/ph/11556196549636558490/js/code_review_scripts.js"></script>
<script type="text/javascript">
 function showPublishInstructions() {
 var element = document.getElementById('review_instr');
 if (element) {
 element.className = 'opened';
 }
 }
 var codereviews;
 function revsOnLoadHandler() {
 // register our source container with the commenting code
 var paths = {'svn3151a581819f39123b0b5fd1ca9e26cebdcaa873': '/Markdown.Editor.js'}
 codereviews = CR_controller.setup(
 {"profileUrl":null,"token":null,"assetHostPath":"http://www.gstatic.com/codesite/ph","domainName":null,"assetVersionPath":"http://www.gstatic.com/codesite/ph/11556196549636558490","projectHomeUrl":"/p/pagedown","relativeBaseUrl":"","projectName":"pagedown","loggedInUserEmail":null}, '', 'svn3151a581819f39123b0b5fd1ca9e26cebdcaa873', paths,
 CR_BrowseIntegrationFactory);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, showPublishInstructions);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_PUB_PLATE, pubRevealed);
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, draftRevealed);
 codereviews.registerActivityListener(CR_ActivityType.DISCARD_DRAFT_COMMENT, draftDestroyed);
 
 
 
 
 
 
 
 var initialized = true;
 reloadCursors();
 }
 window.onload = function() {keysOnLoadHandler(); revsOnLoadHandler();};

</script>
<script type="text/javascript" src="http://www.gstatic.com/codesite/ph/11556196549636558490/js/dit_scripts.js"></script>

 
 
 
 <script type="text/javascript" src="http://www.gstatic.com/codesite/ph/11556196549636558490/js/ph_core.js"></script>
 
 
 
 
 <script type="text/javascript" src="/js/codesite_product_dictionary_ph.pack.04102009.js"></script>
</div> 

<div id="footer" dir="ltr">
 <div class="text">
 <a href="/projecthosting/terms.html">Terms</a> -
 <a href="http://www.google.com/privacy.html">Privacy</a> -
 <a href="/p/support/">Project Hosting Help</a>
 </div>
</div>
 <div class="hostedBy" style="margin-top: -20px;">
 <span style="vertical-align: top;">Powered by <a href="http://code.google.com/projecthosting/">Google Project Hosting</a></span>
 </div>

 
 


 
 </body>
</html>

