
var arr, pin, enterpin = "";
 $(document).ready(function() {
            $(".reload").hide();
 arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
 
pin = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);

$(".output").text("____");

$(".currentpin").text("Your current PIN is: " + pin);
     var btns = "<div class='row mt-3'><div class='col-4'><button onclick='btn_click(" + arr[0] + ")' class='btn btn-secondary btn-block'><b>" + arr[0] + "</b></button></div><div class='col-4'><button onclick='btn_click(" + arr[5] + ")' class='btn btn-secondary btn-block'><b>" + arr[5] + "</b></button></div><div class='col-4'><button onclick='btn_click(" + arr[9] + ")' class='btn btn-secondary btn-block'><b>" + arr[9] + "</b></button></div></div><div class='row mt-3'><div class='col-4'><button onclick='btn_click(" + arr[8] + ")'  class='btn btn-secondary btn-block'><b>" + arr[8] + "</b></button></div><div class='col-4'><button onclick='btn_click(" + arr[2] + ")' class='btn btn-secondary btn-block'><b>" + arr[2] + "</b></button></div><div class='col-4'><button onclick='btn_click(" + arr[4] + ")' class='btn btn-secondary btn-block'><b>" + arr[4] + "</b></button></div></div><div class='row mt-3'><div class='col-4'><button onclick='btn_click(" + arr[1] + ")' class='btn btn-secondary btn-block'><b>" + arr[1] + "</b></button></div><div class='col-4'><button onclick='btn_click(" + arr[7] + ")' class='btn btn-secondary btn-block'><b>" + arr[7] + "</b></button></div><div class='col-4'><button onclick='btn_click(" + arr[3] + ")' class='btn btn-secondary btn-block'><b>" + arr[3] + "</b></button></div></div><div class='row mt-3'><div class='col-4'><button onclick='btn_click(" + arr[6] + ")' class='btn btn-secondary btn-block'><b>" + arr[6] + "</b></button></div><div class='col-4'><button onclick='btn_reset()' class='btn btn-secondary btn-block'><b>CA</b></button></div><div class='col-4'><button onclick='btn_del()' class='btn btn-secondary btn-block'><b>Back</b></button></div></div>";
$(".buttons").html(btns);
 });
 function reload_page() {
            location.reload();
        }


 function get_text() {
            if (enterpin.length == 0) {
                return "____";
            } else if (enterpin.length == 1) {
                return "*___";
            } else if (enterpin.length == 2) {
                return "**__";
            } else if (enterpin.length == 3) {
                return "***_";
            } else if (enterpin.length == 4) {
                return "****";
            }
        }

        function btn_click(x) {
            enterpin += x;
            $(".output").text(get_text());
            if (enterpin.length == 4) {
                if (enterpin== pin) {
                    swal("Success", "Correct PIN", "success");
                    $(".reload").show();
                } else {
                    swal("Error", "Incorrect PIN", "error");
                    reset_pin();
                }
            }
        }
        function btn_del() {
            enterpin = enterpin.substr(0, enterpin.length - 1);
            $(".output").text(get_text());
        }
        function btn_reset() {
            enterpin = "";
            $(".output").text(get_text());
        }
