customProperties:"formComponent:false",
dataSource:"db:/example_data/orders",
encapsulation:60,
extendsID:"9CFD58BB-7D61-42E8-A8F9-8D3353A35056",
items:[
{
formIndex:18,
location:"215,215",
size:"139,30",
text:"( before ship date )",
transparent:true,
typeid:7,
uuid:"033951DB-89F3-4630-8FC8-3A56EED07821"
},
{
dataProviderID:"customerid",
displayType:10,
formIndex:3,
location:"60,90",
name:"customerid",
size:"310,30",
typeid:4,
uuid:"0380F322-C140-4407-8221-77FAC76FD22D",
valuelistID:"0ACEBE58-DE46-470D-BECE-1242F1961938"
},
{
location:"40,20",
size:"350,590",
styleClass:"frame",
typeid:7,
uuid:"090DDABA-30C5-4302-8CAE-0274E9F9394A"
},
{
displaysTags:true,
formIndex:1,
location:"40,20",
size:"350,40",
styleClass:"header",
text:"Order Details",
transparent:true,
typeid:7,
uuid:"20EE2E92-3E02-42A5-B43C-D8FE63709FC5"
},
{
formIndex:2,
labelFor:"customerid",
location:"60,70",
name:"customerid_label",
size:"310,20",
text:"Customerid",
transparent:true,
typeid:7,
uuid:"3EA846A4-B5FA-4AA1-9744-2C41462E15E7"
},
{
dataProviderID:"shippostalcode",
formIndex:17,
location:"60,560",
name:"shippostalcode",
size:"310,30",
typeid:4,
uuid:"61309165-91AA-42D8-AA50-6A4678B14388"
},
{
displaysTags:true,
formIndex:1,
location:"40,260",
size:"330,30",
styleClass:"header",
text:"Shipping Details",
transparent:true,
typeid:7,
uuid:"695BB095-1686-420A-B88E-0E13DF5A32E1"
},
{
dataProviderID:"orderdate",
displayType:5,
formIndex:7,
format:"MM-dd-yyyy",
location:"60,215",
name:"orderdate",
size:"150,30",
typeid:4,
uuid:"6A80DAB8-0561-494E-AE4D-300171E344CD"
},
{
dataProviderID:"shipcity",
formIndex:13,
location:"60,440",
name:"shipcity",
size:"310,30",
typeid:4,
uuid:"7B53C544-16E8-4987-B095-FA52CB5EBA13"
},
{
dataProviderID:"shipaddress",
formIndex:11,
location:"60,380",
name:"shipaddress",
size:"310,30",
typeid:4,
uuid:"7DAFC459-2C34-4F11-9D40-2C58DE174D70"
},
{
formIndex:6,
labelFor:"orderdate",
location:"60,195",
name:"orderdate_label",
size:"150,20",
text:"Orderdate",
transparent:true,
typeid:7,
uuid:"863A6A9B-EE6E-43E7-823E-942886DC5434"
},
{
formIndex:12,
labelFor:"shipcity",
location:"60,420",
name:"shipcity_label",
size:"310,20",
text:"Shipcity",
transparent:true,
typeid:7,
uuid:"A9A264A1-EEA5-47A9-AD15-4515EABFA2A2"
},
{
extendsID:"781D5FE2-3651-421E-A378-6D144DACE4D0",
height:700,
typeid:19,
uuid:"AC038E34-E663-4C36-B639-40D779CB541A"
},
{
formIndex:14,
labelFor:"shipcountry",
location:"60,480",
name:"shipcountry_label",
size:"310,20",
text:"Shipcountry",
transparent:true,
typeid:7,
uuid:"BA87F8F6-494F-444F-B01A-A2A199CB8491"
},
{
dataProviderID:"shipcountry",
formIndex:15,
location:"60,500",
name:"shipcountry",
size:"310,30",
typeid:4,
uuid:"CA26BF50-A723-40A7-B404-5E5233D2EEFE"
},
{
formIndex:16,
labelFor:"shippostalcode",
location:"60,540",
name:"shippostalcode_label",
size:"310,20",
text:"Shippostalcode",
transparent:true,
typeid:7,
uuid:"D34B60C1-4FC8-4771-AAF3-CDABC85808CC"
},
{
dataProviderID:"employeeid",
displayType:10,
formIndex:5,
location:"60,150",
name:"employeeid",
size:"310,30",
typeid:4,
uuid:"D6334986-70E2-4ABB-9854-48FF721FA764",
valuelistID:"DC7E4110-718F-40EA-84FC-D501F7ECA9F9"
},
{
dataProviderID:"shippeddate",
displayType:5,
formIndex:9,
format:"MM-dd-yyyy",
location:"60,320",
name:"shippeddate",
size:"150,30",
typeid:4,
uuid:"D9B51656-47C0-4E7C-A571-96503C180C25"
},
{
formIndex:4,
labelFor:"employeeid",
location:"60,130",
name:"employeeid_label",
size:"310,20",
text:"Employeeid",
transparent:true,
typeid:7,
uuid:"DB00993B-94B5-4863-9480-BF58FB366BA9"
},
{
formIndex:8,
labelFor:"shippeddate",
location:"60,300",
name:"shippeddate_label",
size:"150,20",
text:"Shippeddate",
transparent:true,
typeid:7,
uuid:"DB4C83CD-8759-4CF3-8BD8-3C91E88E8A42"
},
{
formIndex:18,
location:"220,320",
size:"139,30",
text:"( after order date )",
transparent:true,
typeid:7,
uuid:"DC73B508-1538-43EE-8B57-D99D6AB13C27"
},
{
extendsID:"649BB892-E0F2-4C7C-8DFE-F14A01FB389B",
location:"50,640",
typeid:7,
uuid:"E835C215-B7FA-4B38-A310-1C90035D10A9"
},
{
formIndex:10,
labelFor:"shipaddress",
location:"60,360",
name:"shipaddress_label",
size:"310,20",
text:"Shipaddress",
transparent:true,
typeid:7,
uuid:"FA012AE5-89A1-4E60-B4C5-43A313EB8F35"
}
],
name:"order",
showInMenu:true,
typeid:3,
uuid:"1E058104-97DC-4EE5-B867-9EA1F9B5B822"