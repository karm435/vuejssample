<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <span>{{selectedCharacter?.name}}</span>
      </header>

      <section class="modal-body">
        <div>{{selectedCharacter?.gender}}</div>

        <div class="wrap-collabsible">
          <input id="collapsible" class="toggle" type="checkbox">
          <label for="collapsible" class="lbl-toggle">
            Total episodes: {{selectedCharacter?.episode?.length}}</label>
          <div class="collapsible-content">
            <div class="content-inner">
              <ul v-for="ep in selectedCharacter?.episode" :key="ep">
                <li class="episodes-list">
                  <a href="ep">{{ep}}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer class="modal-footer">
        <button
          type="button"
          class="btn-green"
          @click="closeCharacterDetails">
          Close
        </button>
      </footer>
    </div>
  </div>
  </transition>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Modal',
  methods: mapActions([
    'closeCharacterDetails',
  ]),
  props: {
    selectedCharacter: Object,
  },
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #4AAE9B;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-green {
  color: white;
  background: #4AAE9B;
  border: 1px solid #4AAE9B;
  border-radius: 7px;
  padding: 1rem;
  cursor: pointer;
  font-size: medium;
}
.btn-green:hover {
  opacity: 0.9;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity .5s ease;
}

/* expand collapse*/
.wrap-collabsible {
  margin-bottom: 1.2rem 0;
}

input[type='checkbox'] {
  display: none;
}

.lbl-toggle {
  display: block;

  font-weight: bold;
  font-family: monospace;
  font-size: 1.2rem;
  text-transform: uppercase;
  text-align: center;

  padding: 1rem;

  color: #A77B0E;
  background: #FAE042;

  cursor: pointer;

  border-radius: 7px;
  transition: all 0.25s ease-out;
}

.lbl-toggle:hover {
  color: #7C5A0B;
}

.lbl-toggle::before {
  content: ' ';
  display: inline-block;

  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid currentColor;
  vertical-align: middle;
  margin-right: .7rem;
  transform: translateY(-2px);

  transition: transform .2s ease-out;
}

.toggle:checked + .lbl-toggle::before {
  transform: rotate(90deg) translateX(-3px);
}

.collapsible-content {
  max-height: 0px;
  overflow: hidden;
  transition: max-height .25s ease-in-out;
}

.toggle:checked + .lbl-toggle + .collapsible-content {
  max-height: 100vh;
}

.toggle:checked + .lbl-toggle {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.collapsible-content .content-inner {
  background: rgba(250, 224, 66, .2);
  border-bottom: 1px solid rgba(250, 224, 66, .45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  padding: .5rem 1rem;
  max-height: 200px;
}
</style>
