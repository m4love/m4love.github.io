$(function() {
  // Handler for .ready() called.

  updateCategories();
});

function listServices(category) {

  var filteredServices = services.filter(function(service) {
    return service.Category == category;
  });
  var htmlTable = '<div class="list-group" style="text-align: left; border-top: 0px; ">';
  filteredServices.forEach(function (service) {
    htmlTable += '<div class="list-group-item" style="border-top: 1px solid rgb(47, 121, 185);">';
    htmlTable += '<a href="' + service.Link + '">';
    htmlTable +=
      '<h3 class="list-group-item-heading" >' +
        service.Name +
      '</h3>';
    htmlTable += '</a>';
    htmlTable += '<p class="list-group-item-text">' + service["Short Description"] + '</p>' +'<br>';
    var service_name = service.Name;
    htmlTable += '<ul class="nav nav-tabs">' +
    '<li class="active"><a data-toggle="tab" href="#' + service.Name + '-description"><b>Description</b></a></li>' +
      '<li><a data-toggle="tab" href="#' + service.Name + '-pricing"><b>Pricing</b></a></li>' +
      '<li><a data-toggle="tab" href="#' + service.Name + '-recommendation"><b>Recommendation</b></a></li>' +
    '</ul>'+

    '<div class="tab-content">' +
      '<div id="'+ service.Name + '-description" class="tab-pane fade in active">' +
        '<p class="list-group-item-text">'+ service.Description +'</p> <br>';
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
      '<div id="'+ service.Name + '-pricing" class="tab-pane fade">' +
        '<p>'+ service.Pricing +'</p>' +
        '<br>' +
      '</div>' +
      '<div id="' + service.Name + '-recommendation" class="tab-pane fade">' +
        '<p>'+ service.Recommendation+'</p>' +
        '<br>'+
      '</div>' +
    '</div>';

    htmlTable += '<br>';
    if (service.Tags) {
      service.Tags.forEach(function (tag) {
        htmlTable += '<span class="label label-info" style="margin-left:4px;">' + tag + '</span>';
      });
    }
    htmlTable += '</div>';
  });
  htmlTable += "</div>"
  //$('#resources').html(htmlTable);
  return htmlTable;
}

function updateCategories() {
  var categoriesHTML = '';
  categories.forEach(function (category) {
    var prettified = category.replace(/[^a-zA-Z]/g, "")
    categoriesHTML += '<div class="panel panel-primary" style="margin: 10px; border-radius: 0px;" >';
      categoriesHTML += '<div class="panel-heading" role="tab" id="headingOne" style="background-image: linear-gradient(to bottom,rgb(52, 183, 212) 0,rgb(0, 164, 202) 100%); border-radius: 0px;">';
        categoriesHTML += '<h4 class="panel-title" style="font-size:18pt;">';
          categoriesHTML += '<a role="button" data-toggle="collapse" data-parent="#accordion" href="#' + prettified + '-category" aria-expanded="true" aria-controls="collapseOne">';
            categoriesHTML += category;
          categoriesHTML += '</a>';
        categoriesHTML += '</h4>';
      categoriesHTML += '</div>';
      categoriesHTML += '<div id="' + prettified + '-category" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">';
        categoriesHTML += listServices(category);
      categoriesHTML += '</div>';
    categoriesHTML += '</div>';
  });
  $('#accordion').html(categoriesHTML);
}
