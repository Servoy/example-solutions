customProperties:"formComponent:false",
dataSource:"db:/example_data/orders",
encapsulation:60,
items:[
{
anchors:6,
dataProviderID:"order_total",
displaysTags:true,
formIndex:1,
format:"¤#,###.00",
location:"490,440",
size:"120,30",
styleClass:"label_header_3",
text:"Total",
typeid:7,
uuid:"20D8711F-6649-4BA8-B804-D25991E508D3"
},
{
dataProviderID:"shipvia",
location:"260,260",
name:"shipvia",
size:"190,30",
text:"Shipper",
typeid:4,
uuid:"22B19B71-2A09-4622-AE40-30019D00C9E2",
valuelistID:"364ABB20-3F0C-47F4-8498-9EAA691C3FC4"
},
{
labelFor:"shipcity",
location:"260,120",
name:"shipcity_label",
size:"190,20",
text:"City",
transparent:true,
typeid:7,
uuid:"2BF177C7-2B08-400D-B815-1747AD78068B"
},
{
anchors:15,
items:[
{
containsFormID:"D8ABDAF3-DE53-48BF-BEED-B3B4E5BEE417",
location:"20,380",
relationName:"orders_to_order_details",
text:"orderItemsGrid",
typeid:15,
uuid:"355889CD-C852-4EBC-97CC-E8CFE85AE321"
}
],
location:"20,350",
name:"tabs",
printable:false,
size:"590,90",
transparent:true,
typeid:16,
uuid:"392E832C-E55A-4186-8C56-132FCFF06AE5"
},
{
labelFor:"shipaddress",
location:"260,60",
name:"shipaddress_label",
size:"190,20",
text:"Address",
transparent:true,
typeid:7,
uuid:"3EF396C7-A7BF-4A9E-B45E-AE5E93872C44"
},
{
anchors:11,
displaysTags:true,
location:"20,20",
size:"590,30",
styleClass:"label_header_2",
text:"Order Info",
typeid:7,
uuid:"41B9E274-908C-4BAC-9714-EB53A54DDB25"
},
{
labelFor:"customerid",
location:"20,60",
name:"customerid_label",
size:"190,20",
text:"Customer",
transparent:true,
typeid:7,
uuid:"4206DC1C-8AA4-4058-A945-6BD6BA5658C7"
},
{
dataProviderID:"shippeddate",
displayType:5,
formIndex:3,
location:"20,260",
name:"shippeddate",
size:"190,30",
typeid:4,
uuid:"479DF0C5-5427-4F80-BB7E-B7E510BC37C2"
},
{
dataProviderID:"orderdate",
displayType:5,
location:"20,200",
name:"orderdate",
size:"190,30",
text:"Ordered",
typeid:4,
uuid:"4B54D7D1-26C3-41BA-B0FD-3025E0F23B1C"
},
{
dataProviderID:"shipcountry",
location:"260,200",
name:"shipcountry",
size:"190,30",
text:"Country",
typeid:4,
uuid:"4EFF9CB0-E1F5-40C6-87A6-2BA653E79431"
},
{
dataProviderID:"employeeid",
location:"20,140",
name:"employeeid",
size:"190,30",
text:"Sales Rep",
typeid:4,
uuid:"52033CAE-30C6-43B8-85AE-4D343C58FCBA",
valuelistID:"0B278E08-D559-4D27-B1F1-0A7DE73C4F9D"
},
{
height:480,
partType:5,
typeid:19,
uuid:"56F00808-F983-4F57-9E68-58D315F9B756"
},
{
labelFor:"shipvia",
location:"260,240",
name:"shipvia_label",
size:"190,20",
text:"Shipper",
transparent:true,
typeid:7,
uuid:"86B3FE2C-A9C9-4ADB-90DF-A1E8C268F9A9"
},
{
formIndex:2,
labelFor:"shippeddate",
location:"20,240",
name:"shippeddate_label",
size:"190,20",
text:"Shippeddate",
transparent:true,
typeid:7,
uuid:"88F5B1A2-5D41-411F-94E2-806BB4C0F65E"
},
{
dataProviderID:"customerid",
location:"20,80",
name:"customerid",
size:"190,30",
text:"Customer",
typeid:4,
uuid:"896EE95C-36C8-469D-A6CB-182D633A1A45",
valuelistID:"46AC7E83-19D0-40B1-B20D-D544218C7D56"
},
{
labelFor:"shipcountry",
location:"260,180",
name:"shipcountry_label",
size:"190,20",
text:"Country",
transparent:true,
typeid:7,
uuid:"8D5256D3-7313-46F9-9EC9-4D54A4B20667"
},
{
labelFor:"orderdate",
location:"20,180",
name:"orderdate_label",
size:"190,20",
text:"Ordered",
transparent:true,
typeid:7,
uuid:"8DCD9667-B295-464D-ABB1-6320E9D867A4"
},
{
anchors:11,
displaysTags:true,
location:"20,310",
size:"590,30",
styleClass:"label_header_2",
text:"Order Items (%%orders_to_order_details.maxRecordIndex%%)",
typeid:7,
uuid:"9B81A0A2-5336-4E5C-86AF-3DC6D57B740B"
},
{
formIndex:1,
location:"420,260",
name:"navcc",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"30,30",
styleClass:"font-icon",
text:"<span class=\"fa fa-external-link-square\"/>",
transparent:true,
typeid:7,
uuid:"AD16DEA3-42B1-4B88-9F2D-0E99D9AAF84E"
},
{
labelFor:"employeeid",
location:"20,120",
name:"employeeid_label",
size:"190,20",
text:"Sales Rep",
transparent:true,
typeid:7,
uuid:"AE8CF1F8-7DAF-4604-A3D3-5F9855434DB7"
},
{
formIndex:1,
location:"180,140",
name:"navc",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"30,30",
styleClass:"font-icon",
text:"<span class=\"fa fa-external-link-square\"/>",
transparent:true,
typeid:7,
uuid:"B35AEEE1-45C0-4AF4-9793-11F5B8E2EDA0"
},
{
location:"180,80",
name:"nav",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"30,30",
styleClass:"font-icon",
text:"<span class=\"fa fa-external-link-square\"/>",
transparent:true,
typeid:7,
uuid:"BC4C755E-8A66-4F35-96B2-677B14840C94"
},
{
dataProviderID:"shipcity",
location:"260,140",
name:"shipcity",
size:"190,30",
text:"City",
typeid:4,
uuid:"E991BBFD-B098-4E62-8D65-03F686FDFAC4"
},
{
dataProviderID:"shipaddress",
location:"260,80",
name:"shipaddress",
size:"190,30",
text:"Address",
typeid:4,
uuid:"F0721B3A-D83C-4272-9ABE-F0064FF8F0E2"
},
{
anchors:14,
displaysTags:true,
location:"20,440",
size:"590,30",
styleClass:"label_header_3",
text:"Order Total",
typeid:7,
uuid:"F7A491F7-3ADC-4424-AE01-4F4D4CAAD408"
}
],
name:"orderDetail",
showInMenu:true,
typeid:3,
uuid:"E9D1BCD6-FB6C-48B2-A14F-645C60BEF7D1",
view:5