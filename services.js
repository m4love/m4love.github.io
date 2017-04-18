$(function() {
  // Handler for .ready() called.
  listGroups();
});

// function updateServices() {
//   var htmlTable = '<table class="table table-bordered">';
//   services.forEach(function (service) {
//     htmlTable += "<tr>";
//     htmlTable += "<td>" + service.name + "</td>";
//     htmlTable += "<td>" + service.short_description + "</td>";
//     htmlTable += "<td><a href='" + service.read_more + "'>Read more.</a></td>";
//     htmlTable += "</tr>";
//   });
//   htmlTable += "</table>"
//   $('#resources').html(htmlTable);
// }

function listGroups() {
  var htmlTable = '<div class="list-group" style="text-align: left;">';
  services.forEach(function (service) {
    htmlTable += '<a href="' + service.link + '" class="list-group-item">';
    htmlTable +=
      '<h3 class="list-group-item-heading" >' +
        service.name +
      '</h3>';
    htmlTable += '<p class="list-group-item-text">' + service.short_description + '</p>';
    htmlTable += '<br>';
    if (service.tags) {
      service.tags.forEach(function (tag) {
        htmlTable += '<span class="label label-info" style="margin-left:4px;">' + tag + '</span>';
      });
    }
    htmlTable += '</a>';
  });
  htmlTable += "</div>"
  $('#resources').html(htmlTable);
}
