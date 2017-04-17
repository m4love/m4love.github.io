var services = [
  {
    "name" : "Slack",
    "short_description" : "A cloud-based team collaboration tool.",
    "description" : "",
  },
  {
    "name" : "OpenBooks",
    "short_description" : "Simple accounting tool for startups.",
    "description" : "",
  },
  {
    "name" : "Clerky",
    "short_description" : "Automated legal paperwork for startups.",
    "description" : "",
  },
];

$(function() {
  // Handler for .ready() called.
  updateServices();
});

function updateServices() {
  var htmlTable = '<table class="table">';
  services.forEach(function (service) {
    htmlTable += "<tr><td>" + service.name + "</td></tr>";
  });
  htmlTable += "</table>"
  $('#resources').html(htmlTable);
}
