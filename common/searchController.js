angular
  .module('app')
  .controller('searchController' , searchController);

function searchController($scope) {

    $scope.showResults = false;
    $scope.$watch('search', function(new_data, old_data) {
        if (new_data == old_data) {
            return;
        } else if (new_data == '') {
            $scope.showResults = false;
        }else  {
            $scope.showResults = true;
        }
        $scope.clearResults = function() {
            $scope.showResults = false;
            $scope.searchResults = '';
            $scope.search = '';
        }

    $scope.quantity = 4;
    $scope.quantityChange = function(){
        $scope.quantity = $scope.quantity + 4;
    }

  $scope.filterOptions1 = {
      categorys: [
          {name: 'any category', category: ''},
          {name: 'general stuff', category: 'general stuff'},
          {name: 'technology', category: 'technology'},
          {name: 'user accounts', category: 'user accounts'},
          {name: 'features', category: 'features'},
          {name: 'this support site', category: 'this support site'}
      ]
  };

  $scope.filterOptions2 = {
      products: [
          {name: 'any product', product: ''},
          {name: 'General', product: 'General'},
          {name: 'Customer Reports', product: 'Customer Reports'},
          {name: 'Integration Manager', product: 'Integration Manager'},
          {name: 'ABC Product A', product: 'ABC Product A'},
          {name: 'ABC  and Ariba', product: 'ABC  and Ariba'},
          {name: 'ABC  Data Exchange', product: 'ABC  Data Exchange'},
          {name: 'ABC Main', product: 'ABC Main'},
          {name: 'ABC Pro', product: 'ABC Pro'},
          {name: 'ABC Management', product: 'ABC Management'},
          {name: 'ABC Enterprise', product: 'ABC Enterprise'},
          {name: 'Enterprise Solution', product: 'Enterprise Solution'},
          {name: 'XYZ', product: 'XYZ'},
          {name: 'Market Insight', product: 'Market Insight'},
          {name: 'SPQR', product: 'SPQR'},
          {name: 'Mobile', product: 'Mobile'},
          {name: 'MyABC.com', product: 'MyABC.com'},
          {name: 'Analysis Tool', product: 'Analysis Tool'},
          {name: 'Other Solutions', product: 'Other Solutions'},
          {name: 'Data Services', product: 'Data Services'},
          {name: 'Supplier Manager', product: 'Supplier Manager'},
          {name: 'Diversity Service', product: 'Diversity Service'},
          {name: 'App Tools', product: 'App Tools'}
      ]
  };

      $scope.filterItem1 = {
          category: $scope.filterOptions1.categorys[0]
      }
      $scope.filterItem2 = {
          product: $scope.filterOptions2.products[0]
      }

      $scope.customFilter = function(data) {
          if ($scope.filterItem1.category.category && $scope.filterItem2.product.product) {
              if ((data.category === $scope.filterItem1.category.category) && (data.product === $scope.filterItem2.product.product)) {
                  return true;
              }
          } else if ($scope.filterItem2.product.product && (data.product === $scope.filterItem2.product.product)) {
              return true;
          } else if ($scope.filterItem1.category.category && (data.category === $scope.filterItem1.category.category)) {
              return true;
          } else if (!$scope.filterItem1.category.category && !$scope.filterItem2.product.product) {
              return true;
          }
      };

      $scope.data = [
            {title:'Simehi risebul yigicut cetehil norib sanet ridan sanedur mile lemifep', product: 'General, ', category: 'general stuff'},
            {title:'Avirefo yecadop hed nahic, nafono his unid eroc awiy mimusad', product: 'Customer Reports, ', category: 'technology'},
            {title:'Nocaro reke vepimar hed cim cu socedis Bete saleto lamote batenic', product: 'Integration Manager, ', category: 'user accounts'},
            {title:'Yeta le moguh redapi giele lec obih cebige pe toca: Kuhibic ubode otaza nereter', product: 'ABC Product A, ', category: 'features'},
            {title:'Sonot silohot fapu nolelon anedopel aroca tareye hietone upabiewel', product: 'ABC  and Ariba, ', category: 'support site'},
            {title:'Ta adeta nis Uzosi nuyote tosetib sowatu leno napu', product: 'ABC  Data Exchange, ', category: 'general stuff'},
            {title:'Feh tala zere pide wakie ihe ipunis neror; fafepa sire hum vahulov sipe ceji iqatit', product: 'ABC Main, ', category: 'technology'},
            {title:'Hepapie te lacir natis remon porotu me petupe isateg aredie Igiruz nicorut tietatie caxe te Melim', product: 'ABC Pro, ', category: 'user accounts'},
            {title:'Itutayin atin si: La otucanat lie, hucuhih enielaven ladienu ayag eyayoy enurumi capim na rod', product: 'ABC Management, ', category: 'features'},
            {title:'Palo acurum nom miedide retote riminap arar inelera senetuh Setalec fuf rus etelied tipi', product: 'ABC Enterprise, ', category: 'support site'},
            {title:'Cicacip rayir iyerem cien; raligen arad hayitie odeti ga nomana', product: 'Enterprise Solution, ', category: 'general stuff'},
            {title:'Ta iwone lenu linop vupe', product: 'XYZ, ', category: 'technology'},
            {title:'Nohap pe dacenat imop aseb, nu oca yebati ne ninu ne alidalo, de temoc esarape, cici leno tere curet cienecun ci ce sare enitol', product: 'Market Insight, ', category: 'user accounts'},
            {title:'Diere ce idiyeher wenenoh hoyoril sareg Ru cehali itegoge nie ro', product: 'SPQR, ', category: 'features'},
            {title:'Lopotas pudadie araleles ecus ecener rumam ke sohiep honotin areh, menepe deliyo ani canan alotig yoros', product: 'Mobile, ', category: 'support site'},
            {title:'Wuti rotani fa nav ratineg ha Vodu alo tafa arororey ged rih sen losis selo, eser tapor gis elet tirake etasuta yev onepo te naral', product: 'MyABC.com, ', category: 'general stuff'},
            {title:'Lelil yeyir si e nitom tesetaw ros roden yu sahay cip neyu nixey', product: 'Analysis Tool, ', category: 'technology'},
            {title:'Senot hes dom, na wel gageyuf co deneti otesin ti ahol: Ili efole omiepe rilorat pihit', product: 'Other Solutions, ', category: 'user accounts'},
            {title:'Mico imolac eran benil agu; patevo eley zuwo', product: 'Data Services, ', category: 'features'},
            {title:'Efiecet ledav tie meyito pegeso gara onolet', product: 'Supplier Manager, ', category: 'support site'},
            {title:'Nupeh toqarot efid inore gap ge re Yer ni piceres oniehaser iri', product: 'Diversity Service, ', category: 'general stuff'},
            {title:'Latien eleceliv derane rori ili lu tusel da obor acuf Wa minucie tier retirir nidol dad diesit ton nep sef', product: 'App Tools, ', category: 'technology'},
            {title:'Nenetit ted bila isacif ru hanen aserun Lata lipo lah sutahob', product: 'General, ', category: 'user accounts'},
            {title:'Tihi rut dopinit fato del ho necet gi, efar epimaso eceh petera erahe dotiyez yitu sa dele lan', product: 'Customer Reports, ', category: 'features'},
            {title:'Otiletin ma tinapu anul carim piluron', product: 'Integration Manager, ', category: 'support site'},
            {title:'Berena ocatiro qeru lece ti lacehoh ne rip enas hen', product: 'ABC Product A, ', category: 'general stuff'},
            {title:'Rer tuvepuh ieli oni ge Hotoda to dilag atefare eno, siyiyi ne sugore esele', product: 'ABC  and Ariba, ', category: 'technology'},
            {title:'Mamame pi ibi ome esutec tuneties ayeleh rurisec lipab', product: 'ABC  Data Exchange, ', category: 'user accounts'},
            {title:'Besotur woleg adoba no otemati sos ciha buhey isucore', product: 'ABC Main, ', category: 'features'},
            {title:'Pierelih iqate avodalom Iti ti letinat odemewit editem piecob isar sitan; eruri winoy no lipo', product: 'ABC Pro, ', category: 'support site'},
            {title:'Loraboc ripocig doneles nus tenira, fih rige ili beteceg', product: 'ABC Management, ', category: 'general stuff'},
            {title:'Dec pab lor ropat risit mipac idasotuq koc rirec, ehal uqebuta edetomat nerabi, atepapob qo ro ter sagorem sese seraye edefit', product: 'ABC Enterprise, ', category: 'technology'},
            {title:'Kus sen seca dagis her Luro rosi hic rebo mecapi doratov amieha', product: 'Enterprise Solution, ', category: 'user accounts'},
            {title:'Diru mowim gacole iele, sini gun nanutol cavito hub mo asorawu tienepih erusie', product: 'XYZ, ', category: 'features'},
            {title:'Erir jenone daposen nomafo celi cemies nigel ego Gos ihicolu eyamacul rusade', product: 'Market Insight, ', category: 'support site'},
            {title:'Tew romot dat afom olagimal nisedo Takenis bosig eyanase tinat Mec epe nieriser cunitor ibe', product: 'General, ', category: 'general stuff'},
            {title:'Ivope ero nayetu rot imenin lewari watupo duhatac yu tiwodam', product: 'Mobile, ', category: 'technology'},
            {title:'Dota eninopic liel hiti ti todace iharesot mare aniemabas pe', product: 'MyABC.com, ', category: 'user accounts'},
            {title:'Izakeyik recater sefere ra ca ararihec', product: 'Analysis Tool, ', category: 'features'},
            {title:'Cepi etafil osidopag emin be ulona', product: 'Other Solutions, ', category: 'support site'},
            {title:'Domara tetu eni', product: 'Data Services, ', category: 'general stuff'},
            {title:'Anoramon enani pipot si loco hagaden hes pome Ha oremako necel; no seri nero sanifa', product: 'Supplier Manager, ', category: 'technology'},
            {title:'Tiseyek erit tilih ote tesixa secied febi fobega apavo me', product: 'Diversity Service, ', category: 'user accounts'},
            {title:'Dun iqagete butomi len rubafa tefale teg tuyeto icinocep', product: 'App Tools, ', category: 'features'},
            {title:'Esapi vig po buwo ore', product: 'General, ', category: 'support site'},
            {title:'Tehi tin ocala ieyesie repa himax', product: 'Customer Reports, ', category: 'general stuff'},
            {title:'Ice toye totil ohed nolaniy ofuha aletiwe Ilatud hato erisigi locise fataf pie taro xanoyo uloninar', product: 'Integration Manager, ', category: 'technology'},
            {title:'Imo pasim cimat gitahog', product: 'ABC Product A, ', category: 'user accounts'},
            {title:'Ram nad nikun rerom ne neta tafif nesana Lef risitol lin me', product: 'ABC  and Ariba, ', category: 'features'},
            {title:'Ribe toni terah otafiper bihi', product: 'ABC  Data Exchange, ', category: 'support site'},
            {title:'Vege coma nalina lim telec odar yewat, eceret evipos irese nin yo atire rewiciek onenesu gatali', product: 'ABC Main, ', category: 'general stuff'},
            {title:'Atalosec bede maseg ne riyi rocidi van hineya tuhone rupitat Rata osica loway acie gu; nagi loliesa aliras nehiben', product: 'General, ', category: 'technology'},
            {title:'Sotuc dot metayam yodu ariso bir Den telie tot zar wa ta ipo', product: 'ABC Management, ', category: 'user accounts'},
            {title:'Papomit loguga pesope ba mesariy aratenien; rodu hamed poras mik fimi recido rese rati', product: 'ABC Enterprise, ', category: 'features'},
            {title:'Ris ineriel ligi elah di gibav honeno', product: 'Enterprise Solution, ', category: 'support site'},
            {title:'Epal til romor fumed inicolec emed pi tel dile orisehiy, nap gasobe da cuda ca sisuse tusatet dire', product: 'XYZ, ', category: 'general stuff'},
            {title:'Simehi risebul yigicut cetehil norib sanet ridan sanedur mile lemifep', product: 'Market Insight, ', category: 'technology'},
            {title:'Avirefo yecadop hed nahic, nafono his unid eroc awiy mimusad', product: 'SPQR, ', category: 'user accounts'},
            {title:'Nocaro reke vepimar hed cim cu socedis Bete saleto lamote batenic', product: 'Mobile, ', category: 'features'},
            {title:'Yeta le moguh redapi giele lec obih cebige pe toca: Kuhibic ubode otaza nereter', product: 'MyABC.com, ', category: 'support site'},
            {title:'Sonot silohot fapu nolelon anedopel aroca tareye hietone upabiewel', product: 'Analysis Tool, ', category: 'general stuff'},
            {title:'Ta adeta nis Uzosi nuyote tosetib sowatu leno napu', product: 'Other Solutions, ', category: 'technology'},
            {title:'Feh tala zere pide wakie ihe ipunis neror; fafepa sire hum vahulov sipe ceji iqatit', product: 'Data Services, ', category: 'user accounts'},
            {title:'Hepapie te lacir natis remon porotu me petupe isateg aredie Igiruz nicorut tietatie caxe te Melim', product: 'Supplier Manager, ', category: 'features'},
            {title:'Itutayin atin si: La otucanat lie, hucuhih enielaven ladienu ayag eyayoy enurumi capim na rod', product: 'Diversity Service, ', category: 'support site'},
            {title:'Palo acurum nom miedide retote riminap arar inelera senetuh Setalec fuf rus etelied tipi', product: 'App Tools, ', category: 'general stuff'},
            {title:'Cicacip rayir iyerem cien; raligen arad hayitie odeti ga nomana', product: 'General, ', category: 'technology'},
            {title:'Ta iwone lenu linop vupe', product: 'General, ', category: 'user accounts'},
            {title:'Nohap pe dacenat imop aseb, nu oca yebati ne ninu ne alidalo, de temoc esarape, cici leno tere curet cienecun ci ce sare enitol', product: 'Integration Manager, ', category: 'features'},
            {title:'Diere ce idiyeher wenenoh hoyoril sareg Ru cehali itegoge nie ro', product: 'ABC Product A, ', category: 'support site'},
            {title:'Lopotas pudadie araleles ecus ecener rumam ke sohiep honotin areh, menepe deliyo ani canan alotig yoros', product: 'ABC  and Ariba, ', category: 'general stuff'},
            {title:'Wuti rotani fa nav ratineg ha Vodu alo tafa arororey ged rih sen losis selo, eser tapor gis elet tirake etasuta yev onepo te naral', product: 'ABC  Data Exchange, ', category: 'technology'},
            {title:'Lelil yeyir si e nitom tesetaw ros roden yu sahay cip neyu nixey', product: 'ABC Main, ', category: 'user accounts'},
            {title:'Senot hes dom, na wel gageyuf co deneti otesin ti ahol: Ili efole omiepe rilorat pihit', product: 'ABC Pro, ', category: 'features'},
            {title:'Mico imolac eran benil agu; patevo eley zuwo', product: 'ABC Management, ', category: 'support site'},
            {title:'Efiecet ledav tie meyito pegeso gara onolet', product: 'ABC Enterprise, ', category: 'general stuff'},
            {title:'Nupeh toqarot efid inore gap ge re Yer ni piceres oniehaser iri', product: 'General, ', category: 'technology'},
            {title:'Latien eleceliv derane rori ili lu tusel da obor acuf Wa minucie tier retirir nidol dad diesit ton nep sef', product: 'XYZ, ', category: 'user accounts'},
            {title:'Nenetit ted bila isacif ru hanen aserun Lata lipo lah sutahob', product: 'Market Insight, ', category: 'features'},
            {title:'Tihi rut dopinit fato del ho necet gi, efar epimaso eceh petera erahe dotiyez yitu sa dele lan', product: 'SPQR, ', category: 'support site'},
            {title:'Otiletin ma tinapu anul carim piluron', product: 'Mobile, ', category: 'general stuff'},
            {title:'Berena ocatiro qeru lece ti lacehoh ne rip enas hen', product: 'MyABC.com, ', category: 'technology'},
            {title:'Rer tuvepuh ieli oni ge Hotoda to dilag atefare eno, siyiyi ne sugore esele', product: 'Analysis Tool, ', category: 'user accounts'},
            {title:'Mamame pi ibi ome esutec tuneties ayeleh rurisec lipab', product: 'Other Solutions, ', category: 'features'},
            {title:'Besotur woleg adoba no otemati sos ciha buhey isucore', product: 'Data Services, ', category: 'support site'},
            {title:'Pierelih iqate avodalom Iti ti letinat odemewit editem piecob isar sitan; eruri winoy no lipo', product: 'Supplier Manager, ', category: 'general stuff'},
            {title:'Loraboc ripocig doneles nus tenira, fih rige ili beteceg', product: 'General, ', category: 'technology'},
            {title:'Dec pab lor ropat risit mipac idasotuq koc rirec, ehal uqebuta edetomat nerabi, atepapob qo ro ter sagorem sese seraye edefit', product: 'App Tools, ', category: 'user accounts'},
            {title:'Kus sen seca dagis her Luro rosi hic rebo mecapi doratov amieha', product: 'General, ', category: 'features'},
            {title:'Diru mowim gacole iele, sini gun nanutol cavito hub mo asorawu tienepih erusie', product: 'Customer Reports, ', category: 'support site'},
            {title:'Erir jenone daposen nomafo celi cemies nigel ego Gos ihicolu eyamacul rusade', product: 'General, ', category: 'general stuff'},
            {title:'Tew romot dat afom olagimal nisedo Takenis bosig eyanase tinat Mec epe nieriser cunitor ibe', product: 'ABC Product A, ', category: 'technology'},
            {title:'Ivope ero nayetu rot imenin lewari watupo duhatac yu tiwodam', product: 'ABC  and Ariba, ', category: 'user accounts'},
            {title:'Dota eninopic liel hiti ti todace iharesot mare aniemabas pe', product: 'ABC  Data Exchange, ', category: 'features'},
            {title:'Izakeyik recater sefere ra ca ararihec', product: 'ABC Main, ', category: 'support site'},
            {title:'Cepi etafil osidopag emin be ulona', product: 'General, ', category: 'general stuff'},
            {title:'Domara tetu eni', product: 'ABC Management, ', category: 'technology'},
            {title:'Anoramon enani pipot si loco hagaden hes pome Ha oremako necel; no seri nero sanifa', product: 'ABC Enterprise, ', category: 'user accounts'},
            {title:'Tiseyek erit tilih ote tesixa secied febi fobega apavo me', product: 'Enterprise Solution, ', category: 'features'},
            {title:'Dun iqagete butomi len rubafa tefale teg tuyeto icinocep', product: 'XYZ, ', category: 'support site'}
      ];

  });
}
