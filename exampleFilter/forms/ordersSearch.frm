customProperties:"formComponent:false",
dataSource:"db:/example_data/orders",
encapsulation:60,
items:[
{
anchors:11,
dataProviderID:"orderdate",
format:"MM/dd/yyyy",
location:"320,330",
name:"orderdate",
size:"140,30",
transparent:true,
typeid:7,
uuid:"0C4CFDC6-8708-445A-99C4-707612077DE6"
},
{
height:370,
partType:5,
typeid:19,
uuid:"32CC4D7A-BF7F-4D14-BD8D-A817F0DE9896"
},
{
anchors:3,
formIndex:1,
location:"530,210",
onActionMethodID:"6D5403BD-CCD7-4D33-8350-0AFE5F764B34",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"30,30",
styleClass:"font-icon",
text:"<span class=\"fa fa-times\"/>",
toolTipText:"clear filter",
transparent:true,
typeid:7,
uuid:"33588A97-2D09-42EA-9852-EF6C0A26552C"
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
uuid:"39605254-7D40-4E4A-B9BD-14DB07F2C829"
},
{
anchors:11,
dataProviderID:"orders_to_customers.companyname",
location:"0,330",
name:"companyname",
size:"170,30",
transparent:true,
typeid:7,
uuid:"3DCEB1D1-D225-46FF-932C-08A96A850A0E"
},
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
uuid:"47355802-F9BC-4F70-AA77-8ABC40C2767A"
},
{
labelFor:"",
location:"20,190",
size:"490,20",
text:"Employee Filter",
transparent:true,
typeid:7,
uuid:"4B8D6B0B-D1C9-4BC0-94E4-A1A86660FDC4"
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
onDataChangeMethodID:"D4EF6F27-85EA-4A9F-9B4E-F152D212EB3E",
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
uuid:"603DDA49-20B2-47CC-BA78-047DC20523AF"
},
{
labelFor:"",
location:"20,120",
size:"490,20",
text:"Customer Filter",
transparent:true,
typeid:7,
uuid:"708B4944-0027-4101-9E17-D25D31C460C1"
},
{
labelFor:"endDate",
location:"180,50",
name:"endDate_label",
size:"140,20",
text:"To",
transparent:true,
typeid:7,
uuid:"9056E313-A019-456A-8A20-47AC5908CC78"
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
uuid:"90B0CEF0-1860-4C7E-8954-B96EADABFF59"
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
uuid:"98C9B887-CF58-4BC1-BB59-E65DF8A00D0E"
},
{
anchors:11,
location:"10,10",
size:"580,30",
styleClass:"label_header_2",
text:"Filter Orders",
typeid:7,
uuid:"9985CD45-9006-457A-BDB5-453828D35D19"
},
{
anchors:3,
formIndex:1,
location:"530,140",
onActionMethodID:"BD5A9D70-A1BF-4104-8641-89C950870C96",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"30,30",
styleClass:"font-icon",
text:"<span class=\"fa fa-times\"/>",
toolTipText:"clear filter",
transparent:true,
typeid:7,
uuid:"9DCC4B9F-A010-41D3-AEF3-566E2BB19ECF"
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
uuid:"A29E92DE-A45D-4C78-981B-A03202746E49"
},
{
labelFor:"startDate",
location:"20,50",
name:"startDate_label",
size:"140,20",
text:"From",
transparent:true,
typeid:7,
uuid:"AD868BD1-CEB7-46A1-8895-452329082FBB"
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
uuid:"C02BB108-C4C2-4AB9-981E-207920F8A033"
},
{
dataProviderID:"endDate",
displayType:5,
format:"YYYY/MM/dd",
location:"180,70",
name:"endDate",
onDataChangeMethodID:"A9869114-3ADD-4D2C-94F3-FCDDE0907FE5",
selectOnEnter:true,
size:"140,30",
typeid:4,
uuid:"C2CADEBC-710E-45C7-A352-70BC2F49FBFC"
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
onDataChangeMethodID:"29276E6D-58E4-42E0-86CD-EBF724658F00",
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
uuid:"CF2FF722-4A84-4E8A-95D6-513D416F2D18"
},
{
anchors:11,
dataProviderID:"shipcountry",
location:"460,330",
name:"shipcountry",
size:"140,30",
transparent:true,
typeid:7,
uuid:"E1C1C187-C77C-4C75-B7F3-0346A2984084"
},
{
height:305,
partType:1,
typeid:19,
uuid:"E63151C8-DDAA-456D-AC3F-98DA60AC9644"
},
{
dataProviderID:"startDate",
displayType:5,
format:"YYYY/MM/dd",
location:"20,70",
name:"startDate",
onDataChangeMethodID:"A9869114-3ADD-4D2C-94F3-FCDDE0907FE5",
selectOnEnter:true,
size:"140,30",
typeid:4,
uuid:"E64EA8C3-26D6-4501-8174-222D10220405"
},
{
location:"320,70",
onActionMethodID:"A87DCD78-57A2-46A1-A85F-0D2428B5BE77",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"30,30",
styleClass:"font-icon",
text:"<span class=\"fa fa-times\"/>",
toolTipText:"clear filter",
transparent:true,
typeid:7,
uuid:"E9E443D4-C68E-461C-8B60-43909A200D46"
}
],
name:"ordersSearch",
navigatorID:"-1",
scrollbars:32,
showInMenu:true,
size:"600,370",
typeid:3,
uuid:"A37598A4-018F-4382-BB0E-CF23F15EE574",
view:3