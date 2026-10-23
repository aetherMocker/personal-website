<template>
  <section id="contact" class="box contact">
    <div class="box__head">
      <span class="box__title">{{ contact.label }}</span>
      <span class="box__side">{{ contact.title }}</span>
    </div>
    <div class="box__body">
      <a
        :href="`mailto:${contact.email}`"
        class="contact__big"
        v-html="contact.bigLinkText"
      ></a>

      <p class="contact__quote" v-html="contact.manifesto"></p>

      <dl class="rows">
        <div class="rows__row">
          <dt>{{ contact.getInTouchLabel }}</dt>
          <dd>{{ contact.email }}</dd>
        </div>
        <div class="rows__row">
          <dt>Phone</dt>
          <dd>{{ contact.phone }}</dd>
        </div>
        <div class="rows__row">
          <dt>{{ contact.locationLabel }}</dt>
          <dd v-html="contact.location"></dd>
        </div>
        <div v-if="contact.resumeHref" class="rows__row">
          <dt>Résumé</dt>
          <dd>
            <a
              :href="contact.resumeHref"
              target="_blank"
              rel="noopener"
              class="btn"
            >{{ contact.resumeLabel }}</a>
          </dd>
        </div>
      </dl>

      <div class="socials">
        <a
          v-for="soc in footer.socials"
          :key="soc.label"
          :href="soc.href"
          class="btn"
          target="_blank"
          rel="noopener"
        >{{ soc.label }}</a>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  contact: { type: Object, required: true },
  footer: { type: Object, required: true },
})
</script>