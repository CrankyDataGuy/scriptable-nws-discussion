// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: red; icon-glyph: sun;
let url = "https://api.weather.gov/products/types/AFD/locations/OUN"
let req = new Request(url)
let html = await req.loadJSON()

let afd = html['@graph'][0]['@id']

let afdReq = new Request(afd)
let afdHtml = await afdReq.loadJSON()

QuickLook.present(afdHtml.productText)




