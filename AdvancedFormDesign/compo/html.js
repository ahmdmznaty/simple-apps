function Element( elem, args ) {
    let element = document.createElement( elem )
    if(args) {
        for( let attr in args ) {
            if(attr == "children") { for (const child of args["children"]) element.append( child ) }
            else if(attr == "style") { for (const oneStyle in args["style"]) element.style[oneStyle] = args["style"][oneStyle] }
            else {
                element.setAttribute(attr, args[attr])
            }
        }
    }
    return element
}
function a(args)          { return Element("a",          args) }
function abbr(args)       { return Element("abbr",       args) }
function acronym(args)    { return Element("acronym",    args) }
function address(args)    { return Element("address",    args) }
function applet(args)     { return Element("applet",     args) }
function area(args)       { return Element("area",       args) }
function article(args)    { return Element("article",    args) }
function aside(args)      { return Element("aside",      args) }
function audio(args)      { return Element("audio",      args) }

function b(args)          { return Element("b",          args) }
function base(args)       { return Element("base",       args) }
function basefont(args)   { return Element("basefont",   args) }
function bdi(args)        { return Element("bdi",        args) }
function bdo(args)        { return Element("bdo",        args) }
function bgsound(args)    { return Element("bgsound",    args) }
function big(args)        { return Element("big",        args) }
function blink(args)      { return Element("blink",      args) }
function blockquote(args) { return Element("blockquote", args) }
function body(args)       { return Element("body",       args) }    // BODY
function br(args)         { return Element("br",         args) }
function button(args)     { return Element("button",     args) }

function canvas(args)     { return Element("canvas",     args) }
function caption(args)    { return Element("caption",    args) }
function center(args)     { return Element("center",     args) }
function cite(args)       { return Element("cite",       args) }
function code(args)       { return Element("code",       args) }
function col(args)        { return Element("col",        args) }
function colgroup(args)   { return Element("colgroup",   args) }
function content(args)    { return Element("content",    args) }

function data(args)       { return Element("data",       args) }
function datalist(args)   { return Element("datalist",   args) }
function dd(args)         { return Element("dd",         args) }
function del(args)        { return Element("del",        args) }
function details(args)    { return Element("details",    args) }
function dfn(args)        { return Element("dfn",        args) }
function dialog(args)     { return Element("dialog",     args) }
function dir(args)        { return Element("dir",        args) }
function div(args)        { return Element("div",        args) }
function dl(args)         { return Element("dl",         args) }
function dt(args)         { return Element("dt",         args) }

function em(args)         { return Element("em",         args) }
function embed(args)      { return Element("embed",      args) }

function fieldset(args)   { return Element("fieldset",   args) }
function figure(args)     { return Element("figure",     args) }
function font(args)       { return Element("font",       args) }
function footer(args)     { return Element("footer",     args) }
function form(args)       { return Element("form",       args) }
function frame(args)      { return Element("frame",      args) }
function frameset(args)   { return Element("frameset",   args) }

function head(args)       { return Element("head",       args) }    // HEAD
function header(args)     { return Element("header",     args) }
function h1(args)         { return Element("h1",         args) }
function h2(args)         { return Element("h2",         args) }
function h3(args)         { return Element("h3",         args) }
function h4(args)         { return Element("h4",         args) }
function h5(args)         { return Element("h5",         args) }
function h6(args)         { return Element("h6",         args) }
function hgroup(args)     { return Element("hgroup",     args) }
function hr(args)         { return Element("hr",         args) }
function html(args)       { return Element("html",       args) }    // HTML

function i(args)          { return Element("i",          args) }
function iframe(args)     { return Element("iframe",     args) }
function image(args)      { return Element("image",      args) }
function img(args)        { return Element("img",        args) }
function input(args)      { return Element("input",      args) }
function ins(args)        { return Element("ins",        args) }

function kbd(args)        { return Element("kbd",        args) }
function keygen(args)     { return Element("keygen",     args) }

function label(args)      { return Element("label",      args) }
function legend(args)     { return Element("legend",     args) }
function li(args)         { return Element("li",         args) }
function link(args)       { return Element("link",       args) }

function main(args)       { return Element("main",       args) }
function map(args)        { return Element("map",        args) }
function mark(args)       { return Element("mark",       args) }
function marquee(args)    { return Element("marquee",    args) }
function menu(args)       { return Element("menu",       args) }
function menuitem(args)   { return Element("menuitem",   args) }
function meta(args)       { return Element("meta",       args) }
function meter(args)      { return Element("meter",      args) }

function nav(args)        { return Element("nav",        args) }
function nobr(args)       { return Element("nobr",       args) }
function noembed(args)    { return Element("noembed",    args) }
function noframes(args)   { return Element("noframes",   args) }
function noscript(args)   { return Element("noscript",   args) }

function object(args)     { return Element("object",     args) }
function ol(args)         { return Element("ol",         args) }
function optgroup(args)   { return Element("optgroup",   args) }
function option(args)     { return Element("option",     args) }
function output(args)     { return Element("output",     args) }

function p(args)          { return Element("p",          args) }
function param(args)      { return Element("param",      args) }
function picture(args)    { return Element("picture",    args) }
function plaintext(args)  { return Element("plaintext",  args) }
function portal(args)     { return Element("portal",     args) }
function pre(args)        { return Element("pre",        args) }
function progress(args)   { return Element("progress",   args) }

function q(args)          { return Element("q",          args) }

function rb(args)         { return Element("rb",         args) }
function rp(args)         { return Element("rp",         args) }
function rt(args)         { return Element("rt",         args) }
function rtc(args)        { return Element("rtc",        args) }
function ruby(args)       { return Element("ruby",       args) }

function s(args)          { return Element("s",          args) }
function samp(args)       { return Element("samp",       args) }
function script(args)     { return Element("script",     args) }
function section(args)    { return Element("section",    args) }
function select(args)     { return Element("select",     args) }
function shadow(args)     { return Element("shadow",     args) }
function slot(args)       { return Element("slot",       args) }
function small(args)      { return Element("small",      args) }
function source(args)     { return Element("source",     args) }
function spacer(args)     { return Element("spacer",     args) }
function span(args)       { return Element("span",       args) }
function strike(args)     { return Element("strike",     args) }
function strong(args)     { return Element("strong",     args) }
function style(args)      { return Element("style",      args) }
function sub(args)        { return Element("sub",        args) }
function summary(args)    { return Element("summary",    args) }
function sup(args)        { return Element("sup",        args) }
function ruby(args)       { return Element("ruby",       args) }

function table(args)      { return Element("table",      args) }
function tbody(args)      { return Element("tbody",      args) }
function td(args)         { return Element("td",         args) }
function template(args)   { return Element("template",   args) }
function textarea(args)   { return Element("textarea",   args) }
function tfoot(args)      { return Element("tfoot",      args) }
function th(args)         { return Element("th",         args) }
function thead(args)      { return Element("thead",      args) }
function time(args)       { return Element("time",       args) }
function title(args)      { return Element("title",      args) }
function tr(args)         { return Element("tr",         args) }
function track(args)      { return Element("track",      args) }
function tt(args)         { return Element("tt",         args) }

function u(args)          { return Element("u",          args) }
function ul(args)         { return Element("ul",         args) }

function Var(args)        { return Element("var",        args) }
function video(args)      { return Element("video",      args) }

function wbr(args)        { return Element("wbr",        args) }

function xmp(args)        { return Element("xmp",        args) }