angular
    .module('app')
    .controller('forumsProductController' , forumsProductController);

function forumsProductController($scope) {
    $scope.items = [
        {vote:'300', title: 'Nohap pe dacenat imop asebnu oca yebati ne ninu ne alidalode...', author:'SherriWheeler', tags:'ABC', views: '70', comments: '49', date: '12-Apr'},
        {vote:'295', title: 'Diere ce idiyeher wenenoh hoyoril sareg Ru cehali itegoge nie ro', author:'KentHines', tags:'ABC Product A, HOOVERS', views: '56', comments: '10', date: '7-Feb'},
        {vote:'283', title: 'Lopotas pudadie araleles ecus ecener rumam ke sohiep honotin...', author:'ErnestoFlores', tags:'Mobile iq, HOOVERS', views: '180', comments: '43', date: '22-Oct'},
        {vote:'277', title: 'Wuti rotani fa nav ratineg ha Vodu alo tafa arororey ged rih sen...', author:'ClydeMorrison', tags:'General', views: '30', comments: '22', date: '16-Jan'},
        {vote:'274', title: 'Lelil yeyir si e nitom tesetaw ros roden yu sahay cip neyu nixey', author:'AngelicaDelgado', tags:'XYZ, BIZMOLOGY', views: '90', comments: '49', date: '5-Oct'},
        {vote:'273', title: 'Senot hes domna wel gageyuf co deneti otesin ti ahol: Ili efole...', author:'EmmettHale', tags:'XYZ', views: '119', comments: '14', date: '1-Sep'},
        {vote:'264', title: 'Mico imolac eran benil agu; patevo eley zuwo', author:'PabloLewis', tags:'XYZ', views: '219', comments: '13', date: '28-Nov'},
        {vote:'264', title: 'Efiecet ledav tie meyito pegeso gara onolet', author:'HattieAndrews', tags:'ABC Main', views: '547', comments: '31', date: '3-Mar'},
        {vote:'260', title: 'Nupeh toqarot efid inore gap ge re Yer ni piceres oniehaser iri', author:'LaurenceFloyd', tags:'XYZ, BIZMOLOGY, ABC Product A', views: '515', comments: '10', date: '23-Dec'},
        {vote:'260', title: 'Latien eleceliv derane rori ili lu tusel da obor acuf Wa minucie...', author:'MichelePayne', tags:'ABC Main, ABCI', views: '51', comments: '30', date: '22-Dec'},
        {vote:'251', title: 'Nenetit ted bila isacif ru hanen aserun Lata lipo lah sutahob', author:'SusanSharp', tags:'ABC', views: '55', comments: '27', date: '28-Jul'},
        {vote:'244', title: 'Otiletin ma tinapu anul carim piluron', author:'AlisonBenson', tags:'ABC Product A, HOOVERS', views: '312', comments: '28', date: '21-Feb'},
        {vote:'239', title: 'Berena ocatiro qeru lece ti lacehoh ne rip enas hen', author:'JeremiahWalsh', tags:'Mobile iq, HOOVERS', views: '177', comments: '12', date: '1-Sep'},
        {vote:'226', title: 'Mamame pi ibi ome esutec tuneties ayeleh rurisec lipab', author:'SaulRuiz', tags:'General', views: '531', comments: '17', date: '23-Jul'},
        {vote:'223', title: 'Besotur woleg adoba no otemati sos ciha buhey isucore', author:'LoisSparks', tags:'XYZ, BIZMOLOGY', views: '169', comments: '37', date: '30-Sep'},
        {vote:'209', title: 'Loraboc ripocig doneles nus tenirafih rige ili beteceg', author:'RonnieMiles', tags:'XYZ', views: '366', comments: '30', date: '15-Aug'},
        {vote:'205', title: 'Dec pab lor ropat risit mipac idasotuq koc rirecehal uqebuta ede...', author:'AustinMullins', tags:'XYZ', views: '363', comments: '20', date: '11-Oct'},
        {vote:'200', title: 'Kus sen seca dagis her Luro rosi hic rebo mecapi doratov amieha', author:'RichardStevens', tags:'ABC Main', views: '387', comments: '40', date: '12-Nov'},
        {vote:'199', title: 'Diru mowim gacole ielesini gun nanutol cavito hub mo asorawu...', author:'ConradHawkins', tags:'XYZ, BIZMOLOGY, ABC Product A', views: '79', comments: '31', date: '2-Mar'},
        {vote:'195', title: 'Tew romot dat afom olagimal nisedo Takenis bosig eyanase tinat...', author:'LucilleKelley', tags:'ABC Main, ABCI', views: '417', comments: '38', date: '9-May'},
        {vote:'177', title: 'Ivope ero nayetu rot imenin lewari watupo duhatac yu tiwodam', author:'RobinGreen', tags:'ABC', views: '478', comments: '33', date: '9-Oct'},
        {vote:'176', title: 'Dota eninopic liel hiti ti todace iharesot mare aniemabas pe', author:'BelindaFoster', tags:'ABC Product A, HOOVERS', views: '46', comments: '12', date: '11-Jul'},
        {vote:'171', title: 'Izakeyik recater sefere ra ca ararihec', author:'KristineSchneider', tags:'Mobile iq, HOOVERS', views: '98', comments: '6', date: '10-Feb'},
        {vote:'168', title: 'Cepi etafil osidopag emin be ulona', author:'MichaelBowen', tags:'General', views: '561', comments: '8', date: '29-Dec'},
        {vote:'165', title: 'Domara tetu eni', author:'KellyOwen', tags:'XYZ, BIZMOLOGY', views: '489', comments: '20', date: '18-Feb'},
        {vote:'149', title: 'Anoramon enani pipot si loco hagaden hes pome Ha oremako necel...', author:'EloiseOrtega', tags:'XYZ', views: '263', comments: '9', date: '15-Jul'},
        {vote:'148', title: 'Tiseyek erit tilih ote tesixa secied febi fobega apavo me', author:'RickyManning', tags:'XYZ', views: '165', comments: '43', date: 'Feb-29'},
        {vote:'136', title: 'Dun iqagete butomi len rubafa tefale teg tuyeto icinocep', author:'JakeKim', tags:'ABC Main', views: '507', comments: '16', date: '12-Jul'},
        {vote:'131', title: 'Esapi vig po buwo ore', author:'RooseveltWolfe', tags:'XYZ, BIZMOLOGY, ABC Product A', views: '337', comments: '17', date: '3-Oct'},
        {vote:'128', title: 'Tehi tin ocala ieyesie repa himax', author:'LucyPadilla', tags:'ABC Main, ABCI', views: '323', comments: '43', date: '16-Mar'},
        {vote:'121', title: 'Ice toye totil ohed nolaniy ofuha aletiwe Ilatud hato erisigi locise fataf...', author:'JimVega', tags:'XYZ', views: '592', comments: '14', date: '28-May'},
        {vote:'113', title: 'Imo pasim cimat gitahog', author:'BrandyWelch', tags:'ABC Main', views: '245', comments: '17', date: '3-Jan'},
        {vote:'109', title: 'Ram nad nikun rerom ne neta tafif nesana Lef risitol lin me', author:'ClarenceGilbert', tags:'XYZ, BIZMOLOGY, ABC Product A', views: '94', comments: '8', date: '8-Sep'},
        {vote:'100', title: 'Ribe toni terah otafiper bihi', author:'LeroyPena', tags:'ABC Main, ABCI', views: '71', comments: '7', date: '6-Dec'},
        {vote:'96', title: 'Vege coma nalina lim telec odar yewateceret evipos irese nin yo atir...', author:'GrantAdams', tags:'ABC', views: '34', comments: '49', date: '5-Nov'},
        {vote:'87', title: 'Atalosec bede maseg ne riyi rocidi van hineya tuhone rupitat Rata osic...', author:'DanaReynolds', tags:'ABC Product A, HOOVERS', views: '257', comments: '18', date: '30-Jul'},
        {vote:'85', title: 'Sotuc dot metayam yodu ariso bir Den telie tot zar wa ta ipo', author:'WilbertFleming', tags:'Mobile iq, HOOVERS', views: '421', comments: '37', date: '20-Mar'},
        {vote:'79', title: 'Ris ineriel ligi elah di gibav honeno', author:'WillisPeters', tags:'General', views: '119', comments: '13', date: '20-Jun'},
        {vote:'52', title: 'Simehi risebul yigicut cetehil norib sanet ridan sanedur mile lemifep', author:'ChristyHarper', tags:'XYZ, BIZMOLOGY', views: '84', comments: '45', date: '24-Apr'},
        {vote:'37', title: 'Avirefo yecadop hed nahicnafono his unid eroc awiy mimusad', author:'AmandaBridges', tags:'XYZ', views: '470', comments: '49', date: '29-May'},
        {vote:'35', title: 'Nocaro reke vepimar hed cim cu socedis Bete saleto lamote batenic', author:'NinaHunter', tags:'XYZ', views: '311', comments: '47', date: '27-Sep'},
        {vote:'32', title: 'Sonot silohot fapu nolelon anedopel aroca tareye hietone upabiewel', author:'CamilleNewman', tags:'ABC Main', views: '305', comments: '45', date: '17-Jul'},
        {vote:'29', title: 'Ta adeta nis Uzosi nuyote tosetib sowatu leno napu', author:'CameronCopeland', tags:'XYZ, BIZMOLOGY, ABC Product A', views: '457', comments: '23', date: '19-Nov'},
        {vote:'28', title: 'Feh tala zere pide wakie ihe ipunis neror; fafepa sire hum vahulov sipe...', author:'DanaLowe', tags:'ABC Main, ABCI', views: '517', comments: '2', date: '27-Jan'},
        {vote:'23', title: 'Cicacip rayir iyerem cien; raligen arad hayitie odeti ga nomana', author:'LeighFarmer', tags:'ABC', views: '364', comments: '16', date: '19-Nov'},
        {vote:'21', title: 'Ta iwone lenu linop vupe', author:'TobyGardner', tags:'ABC', views: '264', comments: '4', date: '3-Nov'},
        {vote:'19', title: 'Nohap pe dacenat imop asebnu oca yebati ne ninu ne alidalode temoc...', author:'AnnieCasey', tags:'ABC Product A, HOOVERS', views: '550', comments: '45', date: '8-Jul'},
        {vote:'17', title: 'Diere ce idiyeher wenenoh hoyoril sareg Ru cehali itegoge nie ro', author:'IsraelHayes', tags:'Mobile iq, HOOVERS', views: '308', comments: '16', date: '29-Jun'},
        {vote:'16', title: 'Lopotas pudadie araleles ecus ecener rumam ke', author:'BarryMorris', tags:'General', views: '366', comments: '48', date: '24-Feb'},
        {vote:'13', title: 'Wuti rotani fa nav ratineg ha Vodu alo tafa arororey ged rih sen losis selo...', author:'MiltonCannon', tags:'XYZ, BIZMOLOGY', views: '202', comments: '47', date: '9-Sep'}
    ];

    $scope.predicate = '-votes';

    $scope.quantity = 10;
    $scope.quantityChange = function(){
        $scope.quantity = $scope.quantity + 5;
    }

}
