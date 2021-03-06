customProperties:"formComponent:false",
dataSource:"db:/example_data/orders",
encapsulation:60,
items:[
{
anchors:11,
formIndex:2,
labelFor:"employeeid",
location:"170,310",
name:"employeeid_label",
size:"150,20",
text:"Sales Rep",
transparent:true,
typeid:7,
uuid:"081E7487-D80A-4E1C-AAAA-3F1BA9D32A0C"
},
{
anchors:3,
formIndex:1,
location:"530,140",
onActionMethodID:"A5308F75-26EC-4AA4-8DB1-70885CFC0517",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"30,30",
styleClass:"font-icon",
text:"<span class=\"fa fa-times\"/>",
toolTipText:"clear filter",
transparent:true,
typeid:7,
uuid:"3397EF24-8FBC-4AE3-9346-88FD9D19BC87"
},
{
height:305,
partType:1,
typeid:19,
uuid:"391A8C06-9B2C-4201-BA37-FCD3F06240D0"
},
{
anchors:11,
json:{
anchors:11,
containSearchText:true,
dataProviderID:"customerIDs",
location:{
x:20,
y:140
},
onDataChangeMethodID:"8126CACB-5A4D-4D68-A911-93BD557572F7",
placeholderText:"Select Customers",
size:{
height:32,
width:540
},
valuelistID:"46AC7E83-19D0-40B1-B20D-D544218C7D56"
},
location:"20,140",
name:"customerFilter",
size:"540,32",
typeName:"servoyextra-select2tokenizer",
typeid:47,
uuid:"3BEA8324-3AFB-477F-9C5A-44422052A08D"
},
{
anchors:11,
location:"10,10",
size:"580,30",
styleClass:"label_header_2",
text:"Filter Orders",
typeid:7,
uuid:"3E0F65B0-406D-485A-8B08-C7DA214F58D7"
},
{
anchors:11,
displaysTags:true,
location:"10,275",
size:"580,26",
styleClass:"info",
text:"Matching order records: <b>%%count_orders%%<\/b>",
transparent:true,
typeid:7,
uuid:"44CE0D74-C9E0-42B4-B673-8BD16CE3A625"
},
{
anchors:11,
labelFor:"shipcountry",
location:"460,310",
name:"shipcountry_label",
size:"140,20",
text:"Shipcountry",
transparent:true,
typeid:7,
uuid:"476F91D1-FE1A-4397-9375-CCC9CF550A66"
},
{
anchors:11,
dataProviderID:"orders_to_customers.companyname",
location:"0,330",
name:"companyname",
size:"170,30",
transparent:true,
typeid:7,
uuid:"505EDE97-08EF-4F2A-A6B0-2A58C77B8D72"
},
{
anchors:11,
dataProviderID:"shipcountry",
location:"460,330",
name:"shipcountry",
size:"140,30",
transparent:true,
typeid:7,
uuid:"5CB12361-646B-43F8-AD62-FCB87C7C958F"
},
{
anchors:11,
labelFor:"companyname",
location:"0,310",
name:"companyname_label",
size:"170,20",
text:"Customer",
transparent:true,
typeid:7,
uuid:"5D73B57F-5788-43B4-BA1C-C0F2DF941F91"
},
{
labelFor:"endDate",
location:"180,50",
name:"endDate_label",
size:"140,20",
text:"To",
transparent:true,
typeid:7,
uuid:"5F327269-5AB6-4B9E-8202-CB3269D865CF"
},
{
anchors:11,
dataProviderID:"orders_to_employees.display_full_name",
formIndex:3,
location:"170,330",
name:"employeeid",
size:"150,30",
transparent:true,
typeid:7,
uuid:"670D2226-53AB-4644-8A8E-3FA20FD55236"
},
{
height:370,
partType:5,
typeid:19,
uuid:"720C1900-58F0-4705-8539-6ADF8F458AB1"
},
{
dataProviderID:"endDate",
displayType:5,
format:"YYYY/MM/dd",
location:"180,70",
name:"endDate",
onDataChangeMethodID:"2E42A242-173A-4EA3-9F59-DE992CB0A073",
selectOnEnter:true,
size:"140,30",
typeid:4,
uuid:"7D488D24-BCC8-43BD-8482-58E81C24F00D"
},
{
labelFor:"startDate",
location:"20,50",
name:"startDate_label",
size:"140,20",
text:"From",
transparent:true,
typeid:7,
uuid:"8206F2C9-488D-4736-AAFC-07E5BABF7BCC"
},
{
anchors:11,
labelFor:"orderdate",
location:"320,310",
name:"orderdate_label",
size:"140,20",
text:"Date",
transparent:true,
typeid:7,
uuid:"94EFCDBE-3926-4DC3-8089-3C6A086587DA"
},
{
dataProviderID:"startDate",
displayType:5,
format:"YYYY/MM/dd",
location:"20,70",
name:"startDate",
onDataChangeMethodID:"2E42A242-173A-4EA3-9F59-DE992CB0A073",
selectOnEnter:true,
size:"140,30",
typeid:4,
uuid:"9966AE59-5180-4767-B10A-8E91952D8F76"
},
{
anchors:11,
dataProviderID:"orderdate",
format:"MM/dd/yyyy",
location:"320,330",
name:"orderdate",
size:"140,30",
transparent:true,
typeid:7,
uuid:"9E73F70A-BDE1-4E27-A3D9-F0CE70B2A681"
},
{
labelFor:"",
location:"20,120",
size:"490,20",
text:"Customer Filter",
transparent:true,
typeid:7,
uuid:"AFE75370-E6D7-40D3-8363-C74FA9694FBF"
},
{
labelFor:"",
location:"20,190",
size:"490,20",
text:"Employee Filter",
transparent:true,
typeid:7,
uuid:"BE31CF8D-CAFB-46B5-A4FB-5256A949D63D"
},
{
anchors:11,
json:{
anchors:11,
containSearchText:true,
dataProviderID:"employeeIDs",
location:{
x:20,
y:210
},
onDataChangeMethodID:"6553213D-74F5-43DA-B115-4DCB9F13115A",
placeholderText:"Select Customers",
size:{
height:32,
width:540
},
valuelistID:"0B278E08-D559-4D27-B1F1-0A7DE73C4F9D"
},
location:"20,210",
name:"employeeFilter",
size:"540,32",
typeName:"servoyextra-select2tokenizer",
typeid:47,
uuid:"CE96B900-FB12-4DC6-BCBC-8610587DB61B"
},
{
location:"320,70",
onActionMethodID:"0ADE1270-49C6-4B3F-B00F-8B90D013C67C",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"30,30",
styleClass:"font-icon",
text:"<span class=\"fa fa-times\"/>",
toolTipText:"clear filter",
transparent:true,
typeid:7,
uuid:"CFC55C6C-C4F7-43F7-B834-2776A2E44563"
},
{
anchors:3,
formIndex:1,
location:"530,210",
onActionMethodID:"E1C3C4C9-8222-4D70-B025-BE950F97135B",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"30,30",
styleClass:"font-icon",
text:"<span class=\"fa fa-times\"/>",
toolTipText:"clear filter",
transparent:true,
typeid:7,
uuid:"FD892F1D-3AFD-436C-B240-38E223887D8E"
}
],
name:"ordersSearch",
navigatorID:"-1",
scrollbars:32,
showInMenu:true,
size:"600,370",
typeid:3,
uuid:"5052BF0B-80CB-4489-B8C8-ADFC383B9EE6",
view:3