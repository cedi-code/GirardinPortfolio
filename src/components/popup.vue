<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <svg   class="cross"  viewbox="0 0 100 100" @click="$emit('close')">
            <path class="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
          </svg>
          <h2>Sensible Daten</h2>
          <hr>
          <div class="request">
            <h3>Request:
              <span><slot name="request"></slot></span>
            </h3>
          </div>

          <div class="modal-body">
            Diese Information wurde als sensibel eingestuft!<br>
            Bitte überprüfen Sie ihren Request und Tippen Sie Ihren Zugangscode, <br>
            denn Sie via Email erhalten haben.<br>
            <br>
            Falls Sie noch keinen Zugangscode haben, können Sie ihn hier einfordern.


          </div>



          <div class="modal-footer">
            <form >
              <div class="form-group">
                <input type="password" id="pass-user" name="pass-user" class="control-inputs" minlength="" maxlength="100" autocomplete="off" value="" required="required">
                <label for="pass-user" class="control-label">
                  Zugangscode
                </label>
                <i class="bar"></i>
              </div>

              <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
    export default {
        name: "popup"
    }
</script>

<style scoped>

  .cross {
    float: right;
    width: 50px;
    height: 35px;
    display: block;
    transition: opacity .5s ease;
    opacity: 0.5;

  }
  .cross:hover {
    opacity: 1;
  }
  .close-x {
    stroke: black;
    fill: transparent;
    stroke-linecap: round;
    stroke-width: 5px;

  }

  .popBox {


    padding: 20px;
    width: 200px;

    position: absolute;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:active,
  input:-webkit-autofill:focus {
    background-color: #506162;
    box-shadow: 0 0 0 1000px #ffffff inset;
    color: #555555;
    padding-left: 5px;
    -webkit-text-fill-color: #555555;
  }
  .form-group {
    margin: 25px auto;
    position: relative;
    text-align: left;

  }
  .control-inputs {
    background-color: rgba(0, 0, 0, 0);
    border-color: rgba(0, 0, 0, 0);
    border-width: 0;
    box-shadow: none;
    color: rgba(0, 0, 0, 0);
    display: block;
    font-size: 2.5rem;
    height: 40px;
    line-height: 1.9;
    transition: all 0.28s ease;
    width: 100%;
  }

  .control-inputs:focus,
  .control-inputs:valid {
    color: #333333;
  }

  .control-inputs:focus ~ .control-label,
  .control-inputs:valid ~ .control-label {
    color: #808080;
    font-size: 0.8rem;
    left: 0;
    top: -1rem;
  }

  .control-inputs:focus ~ .control-label {
    color: #4c747e;

  }

  .control-inputs:focus ~ .bar::before {
    left: 0;
    width: 100%;
  }

  .control-label {
    color: #9e9e9e;
    float: left;
    font-size: 1.5rem;
    font-weight: normal;
    position: absolute;
    top: 0.25rem;
    transition: all 0.28s ease;
    z-index: 100;
  }

  .bar::before {
    background-color: #8bd081;
    bottom: -0.0625rem;
    content: '';
    font-size: 1em;
    height: 0.155rem;
    left: 50%;
    position: absolute;
    transition: left 0.28s ease, width 0.28s ease;
    width: 0;
    z-index: 1000;
  }

  .bar {
    border-bottom: 0.0625rem solid #6c6c6c;
    display: block;
    position: relative;
  }


  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 40%;
    margin: 0px auto;
    padding: 2%;
    background: floralwhite;
    text-align: left;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: 'Renner*';
  }
  .modal-container h2{
    font-size: 300%;
    font-weight: 200;
    margin: 0;
    padding: 0;
    padding-top: 3vh;
  }

  .request h3 {
    font-size: 150%;
    font-weight: 400;

    color: #2c2c2c;


  }
  .request h3 span {
    font-style: italic;



  }

  .modal-body {
    margin: 20px 0;
  }
  .modal-footer {
    margin: 30px 20px;
  }

  .modal-default-button {
    float: right;
  }

  /*
   * The following styles are auto-applied to elements with
   * transition="modal" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the modal transition by editing
   * these styles.
   */

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  @media screen and (max-width: 1100px) {
    .modal-container {
      width: 60%;
    }
  }
  @media screen and (max-width: 800px) {
    .modal-container {
      width: 80%;
    }
  }
</style>
