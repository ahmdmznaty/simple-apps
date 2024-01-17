

let compo = {}

compo.Element = ( elem, args ) => {
    let element = document.createElement( elem )
    if(args) {
        for( let attr in args ) {
            if(attr == "children") { for (const child of args["children"]) element.append( child ) }
            else if(attr == "style") { for (const oneStyle in args["style"]) element.style[oneStyle] = args["style"][oneStyle] }
            else if(attr == "text") element.innerText = args["text"]
            else if(attr.slice(0, 2) == "on") element.addEventListener(attr.slice(2), args[attr])
            else {
                element.setAttribute(attr, args[attr])
            }
        }
    }
    return element
}
compo.a = (args) =>          { return compo.Element("a",          args) }
compo.abbr = (args) =>       { return compo.Element("abbr",       args) }
compo.acronym = (args) =>    { return compo.Element("acronym",    args) }
compo.address = (args) =>    { return compo.Element("address",    args) }
compo.applet = (args) =>     { return compo.Element("applet",     args) }
compo.area = (args) =>       { return compo.Element("area",       args) }
compo.article = (args) =>    { return compo.Element("article",    args) }
compo.aside = (args) =>      { return compo.Element("aside",      args) }
compo.audio = (args) =>      { return compo.Element("audio",      args) }

compo.b = (args) =>          { return compo.Element("b",          args) }
compo.base = (args) =>       { return compo.Element("base",       args) }
compo.basefont = (args) =>   { return compo.Element("basefont",   args) }
compo.bdi = (args) =>        { return compo.Element("bdi",        args) }
compo.bdo = (args) =>        { return compo.Element("bdo",        args) }
compo.bgsound = (args) =>    { return compo.Element("bgsound",    args) }
compo.big = (args) =>        { return compo.Element("big",        args) }
compo.blink = (args) =>      { return compo.Element("blink",      args) }
compo.blockquote = (args) => { return compo.Element("blockquote", args) }
compo.body = (args) =>       { return compo.Element("body",       args) }    // BODY
compo.br = (args) =>         { return compo.Element("br",         args) }
compo.button = (args) =>     { return compo.Element("button",     args) }

compo.canvas = (args) =>     { return compo.Element("canvas",     args) }
compo.caption = (args) =>    { return compo.Element("caption",    args) }
compo.center = (args) =>     { return compo.Element("center",     args) }
compo.cite = (args) =>       { return compo.Element("cite",       args) }
compo.code = (args) =>       { return compo.Element("code",       args) }
compo.col = (args) =>        { return compo.Element("col",        args) }
compo.colgroup = (args) =>   { return compo.Element("colgroup",   args) }
compo.content = (args) =>    { return compo.Element("content",    args) }

compo.data = (args) =>       { return compo.Element("data",       args) }
compo.datalist = (args) =>   { return compo.Element("datalist",   args) }
compo.dd = (args) =>         { return compo.Element("dd",         args) }
compo.del = (args) =>        { return compo.Element("del",        args) }
compo.details = (args) =>    { return compo.Element("details",    args) }
compo.dfn = (args) =>        { return compo.Element("dfn",        args) }
compo.dialog = (args) =>     { return compo.Element("dialog",     args) }
compo.dir = (args) =>        { return compo.Element("dir",        args) }
compo.div = (args) =>        { return compo.Element("div",        args) }
compo.dl = (args) =>         { return compo.Element("dl",         args) }
compo.dt = (args) =>         { return compo.Element("dt",         args) }

compo.em = (args) =>         { return compo.Element("em",         args) }
compo.embed = (args) =>      { return compo.Element("embed",      args) }

compo.fieldset = (args) =>   { return compo.Element("fieldset",   args) }
compo.figure = (args) =>     { return compo.Element("figure",     args) }
compo.font = (args) =>       { return compo.Element("font",       args) }
compo.footer = (args) =>     { return compo.Element("footer",     args) }
compo.form = (args) =>       { return compo.Element("form",       args) }
compo.frame = (args) =>      { return compo.Element("frame",      args) }
compo.frameset = (args) =>   { return compo.Element("frameset",   args) }

compo.head = (args) =>       { return compo.Element("head",       args) }    // HEAD
compo.header = (args) =>     { return compo.Element("header",     args) }
compo.h1 = (args) =>         { return compo.Element("h1",         args) }
compo.h2 = (args) =>         { return compo.Element("h2",         args) }
compo.h3 = (args) =>         { return compo.Element("h3",         args) }
compo.h4 = (args) =>         { return compo.Element("h4",         args) }
compo.h5 = (args) =>         { return compo.Element("h5",         args) }
compo.h6 = (args) =>         { return compo.Element("h6",         args) }
compo.hgroup = (args) =>     { return compo.Element("hgroup",     args) }
compo.hr = (args) =>         { return compo.Element("hr",         args) }
compo.html = (args) =>       { return compo.Element("html",       args) }    // HTML

compo.i = (args) =>          { return compo.Element("i",          args) }
compo.iframe = (args) =>     { return compo.Element("iframe",     args) }
compo.image = (args) =>      { return compo.Element("image",      args) }
compo.img = (args) =>        { return compo.Element("img",        args) }
compo.input = (args) =>      { return compo.Element("input",      args) }
compo.ins = (args) =>        { return compo.Element("ins",        args) }

compo.kbd = (args) =>        { return compo.Element("kbd",        args) }
compo.keygen = (args) =>     { return compo.Element("keygen",     args) }

compo.label = (args) =>      { return compo.Element("label",      args) }
compo.legend = (args) =>     { return compo.Element("legend",     args) }
compo.li = (args) =>         { return compo.Element("li",         args) }
compo.link = (args) =>       { return compo.Element("link",       args) }

compo.main = (args) =>       { return compo.Element("main",       args) }
compo.map = (args) =>        { return compo.Element("map",        args) }
compo.mark = (args) =>       { return compo.Element("mark",       args) }
compo.marquee = (args) =>    { return compo.Element("marquee",    args) }
compo.menu = (args) =>       { return compo.Element("menu",       args) }
compo.menuitem = (args) =>   { return compo.Element("menuitem",   args) }
compo.meta = (args) =>       { return compo.Element("meta",       args) }
compo.meter = (args) =>      { return compo.Element("meter",      args) }

compo.nav = (args) =>        { return compo.Element("nav",        args) }
compo.nobr = (args) =>       { return compo.Element("nobr",       args) }
compo.noembed = (args) =>    { return compo.Element("noembed",    args) }
compo.noframes = (args) =>   { return compo.Element("noframes",   args) }
compo.noscript = (args) =>   { return compo.Element("noscript",   args) }

compo.object = (args) =>     { return compo.Element("object",     args) }
compo.ol = (args) =>         { return compo.Element("ol",         args) }
compo.optgroup = (args) =>   { return compo.Element("optgroup",   args) }
compo.option = (args) =>     { return compo.Element("option",     args) }
compo.output = (args) =>     { return compo.Element("output",     args) }

compo.p = (args) =>          { return compo.Element("p",          args) }
compo.param = (args) =>      { return compo.Element("param",      args) }
compo.picture = (args) =>    { return compo.Element("picture",    args) }
compo.plaintext = (args) =>  { return compo.Element("plaintext",  args) }
compo.portal = (args) =>     { return compo.Element("portal",     args) }
compo.pre = (args) =>        { return compo.Element("pre",        args) }
compo.progress = (args) =>   { return compo.Element("progress",   args) }

compo.q = (args) =>          { return compo.Element("q",          args) }

compo.rb = (args) =>         { return compo.Element("rb",         args) }
compo.rp = (args) =>         { return compo.Element("rp",         args) }
compo.rt = (args) =>         { return compo.Element("rt",         args) }
compo.rtc = (args) =>        { return compo.Element("rtc",        args) }
compo.ruby = (args) =>       { return compo.Element("ruby",       args) }

compo.s = (args) =>          { return compo.Element("s",          args) }
compo.samp = (args) =>       { return compo.Element("samp",       args) }
compo.script = (args) =>     { return compo.Element("script",     args) }
compo.section = (args) =>    { return compo.Element("section",    args) }
compo.select = (args) =>     { return compo.Element("select",     args) }
compo.shadow = (args) =>     { return compo.Element("shadow",     args) }
compo.slot = (args) =>       { return compo.Element("slot",       args) }
compo.small = (args) =>      { return compo.Element("small",      args) }
compo.source = (args) =>     { return compo.Element("source",     args) }
compo.spacer = (args) =>     { return compo.Element("spacer",     args) }
compo.span = (args) =>       { return compo.Element("span",       args) }
compo.strike = (args) =>     { return compo.Element("strike",     args) }
compo.strong = (args) =>     { return compo.Element("strong",     args) }
compo.style = (args) =>      { return compo.Element("style",      args) }
compo.sub = (args) =>        { return compo.Element("sub",        args) }
compo.summary = (args) =>    { return compo.Element("summary",    args) }
compo.sup = (args) =>        { return compo.Element("sup",        args) }
compo.ruby = (args) =>       { return compo.Element("ruby",       args) }

compo.table = (args) =>      { return compo.Element("table",      args) }
compo.tbody = (args) =>      { return compo.Element("tbody",      args) }
compo.td = (args) =>         { return compo.Element("td",         args) }
compo.template = (args) =>   { return compo.Element("template",   args) }
compo.textarea = (args) =>   { return compo.Element("textarea",   args) }
compo.tfoot = (args) =>      { return compo.Element("tfoot",      args) }
compo.th = (args) =>         { return compo.Element("th",         args) }
compo.thead = (args) =>      { return compo.Element("thead",      args) }
compo.time = (args) =>       { return compo.Element("time",       args) }
compo.title = (args) =>      { return compo.Element("title",      args) }
compo.tr = (args) =>         { return compo.Element("tr",         args) }
compo.track = (args) =>      { return compo.Element("track",      args) }
compo.tt = (args) =>         { return compo.Element("tt",         args) }

compo.u = (args) =>          { return compo.Element("u",          args) }
compo.ul = (args) =>         { return compo.Element("ul",         args) }

compo.Var = (args) =>        { return compo.Element("var",        args) }
compo.video = (args) =>      { return compo.Element("video",      args) }

compo.wbr = (args) =>        { return compo.Element("wbr",        args) }

compo.xmp = (args) =>        { return compo.Element("xmp",        args) }



export default compo

