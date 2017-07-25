var ORDERS_LISTING_SELECTOR = '[data-coffee-orders="listing"]';

function iterateWithObj(obj, fn) {
  Object.keys(obj).forEach(fn);
}

function createCell(data) {
  return $('<td>', {
    'class': 'order-cell',
    html: data
  });
}

function createRow(cellArray) {
  var $tr = $('<tr>');
  cellArray.forEach(function (cell) {
    $tr.append(cell);
  })
  return $tr;
}

function formatOrderdata(dataObj) {
  console.log(dataObj);
  var formattedText = '';
  iterateWithObj(dataObj, function (key) {
    formattedText += key + ':' + dataObj[key] + '<br>';
  });
  return formattedText;
}

function drawData(data) {
  var $listing = $(ORDERS_LISTING_SELECTOR);
  console.log(data);
  var $table = $('<table>');
  iterateWithObj(data, function (key) {
    var $tr = createRow([
      createCell(key),
      createCell(formatOrderdata(data[key]))
    ]);
    $table.append($tr);
  });
  $listing.append($table);
}

getServerData().then(drawData);