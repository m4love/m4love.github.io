$(function() {
  // Handler for .ready() called.

  listGroups();
  updateCategories();
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
    htmlTable += '<div class="list-group-item">';
    htmlTable += '<a href="' + service.link + '">';
    htmlTable +=
      '<h3 class="list-group-item-heading" >' +
        service.name +
      '</h3>';
    htmlTable += '</a>';
    htmlTable += '<p class="list-group-item-text">' + service.short_description + '</p>' +'<br>';
    var service_name = service.name;
    htmlTable += '<ul class="nav nav-tabs">' +
    '<li class="active"><a data-toggle="tab" href="#' + service.name + '-description">Description</a></li>' +
      '<li><a data-toggle="tab" href="#' + service.name + '-pricing">Pricing</a></li>' +
      '<li><a data-toggle="tab" href="#' + service.name + '-recommendation">Recommendation</a></li>' +
    '</ul>'+

    '<div class="tab-content">' +
      '<div id="'+ service.name + '-description" class="tab-pane fade in active">' +
        '<p class="list-group-item-text">'+ service.description +'</p> <br>';
      //
      // // Case for putting tags inside descritption element
      //   htmlTable += '<br>';
      //   if (service.tags) {
      //     service.tags.forEach(function (tag) {
      //       htmlTable += '<span class="label label-info" style="margin-left:4px;">' + tag + '</span>';
      //     });
      //   }
//
      htmlTable += '</div>' +
      '<div id="'+ service.name + '-pricing" class="tab-pane fade">' +
        '<p>'+ service.pricing +'</p>' +
        '<br>' +
      '</div>' +
      '<div id="' + service.name + '-recommendation" class="tab-pane fade">' +
        '<p>'+ service.recommendation+'</p>' +
        '<br>'+
      '</div>' +
    '</div>';

    htmlTable += '<br>';
    if (service.tags) {
      service.tags.forEach(function (tag) {
        htmlTable += '<span class="label label-info" style="margin-left:4px;">' + tag + '</span>';
      });
    }
    htmlTable += '</div>';
  });
  htmlTable += "</div>"
  $('#resources').html(htmlTable);
}

function updateCategories() {
  var htmlTable = '';
  categories.forEach(function (category) {
    var prettified = category.replace(/[^a-zA-Z]/g, "")
    htmlTable += '<div class="panel panel-default">';
      htmlTable += '<div class="panel-heading" role="tab" id="headingOne">';
        htmlTable += '<h4 class="panel-title">';
          htmlTable += '<a role="button" data-toggle="collapse" data-parent="#accordion" href="#' + prettified + '-category" aria-expanded="true" aria-controls="collapseOne">';
            htmlTable += category;
          htmlTable += '</a>';
        htmlTable += '</h4>';
      htmlTable += '</div>';
      htmlTable += '<div id="' + prettified + '-category" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">';
        htmlTable += '<div class="panel-body">';
          htmlTable += 'jfslkdfs';
        htmlTable += '</div>';
      htmlTable += '</div>';
    htmlTable += '</div>';
  });
  $('#accordion').html(htmlTable);
}
