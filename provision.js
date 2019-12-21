const now = Date.now();

// 
var vlans = declare("InternetGatewayDevice.WANDevice.1.WANConnectionDevice.*.WANIPConnection.1.X_HW_VLAN",{value: Date.now()});
let index=0;
for (let vlan of vlans){
  index++;
  if(vlan.value[0] == 555) {
    log('VLAN TR069: ' + vlan.value[0]);
  } else {
    log('VLAN: ' + vlan.value[0] + ' BORRO WANIP.' + index);
  }
}
let vlan=1;
//declare("InternetGatewayDevice.WANDevice.1.WANConnectionDevice.3",null, {path: 0});
//return 0;
//declare("InternetGatewayDevice.WANDevice.1.WANConnectionDevice.*",null, {path: 1});

// Only fort test labeled onts
let testtag = declare("Tags.Test", {value: 1});
if (testtag.value == undefined) {
    log('CPE is not a test device!!!!!!');
    //declare("Tags.Popo", null, {value: true});
    return;
}


// If Tag provisioned is defined abort
let provisioned = declare("Tags.Provisioned", {value: 1});
if (provisioned.value !== undefined) {
    log('CPE is (allegedly) provisioned, returning' + provisioned.value );
    //declare("Tags.Popo", null, {value: true});
    return;
}
// Count WANConnectionDevice instances
var wandevcount = declare("InternetGatewayDevice.WANDevice.1.WANConnectionDevice.*",{value: Date.now()}).size;
// Add one instance wandevcount + 1
declare("InternetGatewayDevice.WANDevice.1.WANConnectionDevice.[]",null, { path: wandevcount + 1});
// Add ono wanipconn
let wanconnitem=wandevcount + 1;
declare("InternetGatewayDevice.WANDevice.1.WANConnectionDevice."+wanconnitem+".WANIPConnection.[]",null, { path: 1});
// Asign vlan
declare("InternetGatewayDevice.WANDevice.1.WANConnectionDevice."+wanconnitem+".WANIPConnection.1.X_HW_VLAN", {value: now}, {value: "99"});
// Ebale IPV6 X_HW_IPv6Enable
declare("InternetGatewayDevice.WANDevice.1.WANConnectionDevice."+wanconnitem+".WANIPConnection.1.X_HW_IPv6Enable", {value: now}, {value: true});
declare("InternetGatewayDevice.WANDevice.1.WANConnectionDevice."+wanconnitem+".WANIPConnection.1.X_HW_IPv6.IPv6Address.[]",null, { path: 1});
declare("InternetGatewayDevice.WANDevice.1.WANConnectionDevice."+wanconnitem+".WANIPConnection.1.X_HW_IPv6.IPv6Address.1.Origin", {value: now}, {value: "AutoConfigured"});
declare("InternetGatewayDevice.WANDevice.1.WANConnectionDevice."+wanconnitem+".WANIPConnection.1.X_HW_IPv6.IPv6Prefix.[]",null, { path: 1});
declare("InternetGatewayDevice.WANDevice.1.WANConnectionDevice."+wanconnitem+".WANIPConnection.1.X_HW_IPv6.IPv6Prefix.1.Origin", {value: now}, {value: "PrefixDelegation"});
declare("Tags.Provisioned", null, {value: true});
log('Numero de wandev: ' + wandevcount +' ' + wanconnitem );
return;


log('No funciono' );
declare("Tags.Popo1", null, {value: true});


log('Creating WANPPPConnection (if necessary)');
declare("InternetGatewayDevice.WANDevice.1.WANConnectionDevice.*", null, {path: 1});
declare("InternetGatewayDevice.WANDevice.1.WANConnectionDevice.2.WANIPConnection.*", null, {path: 1});
log('Setting up WANPPPConnection');
declare("InternetGatewayDevice.WANDevice.1.WANConnectionDevice.*.WANIPConnection.*.*", {path: now});
//declare("InternetGatewayDevice.WANDevice.1.WANConnectionDevice.4.WANIPConnection.1", null, {path: 1});
//declare("InternetGatewayDevice.WANDevice.1.WANConnectionDevice.4.WANIPConnection.1.Name", {value: now}, {value: "VOICE_30"});
//declare("Tags.Provisioned", null, {value: true});


//declare("InternetGatewayDevice.WANDevice.1.WANConnectionDevice.*.WANIPConnection.*", null, {path: 1});

// You CANNOT set this parameter. This parameter is the CPE telling you how many instances exist...
/*declare("InternetGatewayDevice.WANDevice.1.WANConnectionDevice.*.WANIPConnectionNumberOfEntries", {value: now}, {value: 1});*/

//declare("InternetGatewayDevice.WANDevice.1.WANConnectionDevice.*.WANIPConnection.*.Name", {value: now}, {value: "VOICE_30"});
//declare("InternetGatewayDevice.WANDevice.1.WANConnectionDevice.*.WANIPConnection.*.ConnectionType", {value: now}, {value: "IP_Routed"});


log('Tagging' + provisioned.value );
bn
