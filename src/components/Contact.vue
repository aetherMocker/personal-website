<template>
  <div>
    <div class="sticky-label">
      <span>{{ contact.label }}</span><span>{{ contact.title }}</span>
    </div>
    <section id="contact">
      <div class="contact__info" v-reveal>
        <div class="contact__info-col">
          <span class="contact__info-label">{{ contact.getInTouchLabel }}</span>
          <span class="contact__info-value">{{ contact.email }}</span>
          <span class="contact__info-value">{{ contact.phone }}</span>
          <span class="contact__info-label" style="margin-top:1.2rem;">{{ contact.locationLabel }}</span>
          <span class="contact__info-value" v-html="contact.location"></span>

          <a
            v-if="contact.resumeHref"
            :href="contact.resumeHref"
            target="_blank"
            rel="noopener"
            class="btn"
            style="margin-top:1.2rem; align-self:flex-start;"
          >{{ contact.resumeLabel }}</a>
        </div>
        <div class="contact__info-col">
          <p class="contact__manifesto" v-html="contact.manifesto"></p>
        </div>
      </div>

      <div class="contact__big" v-reveal>
        <a :href="`mailto:${contact.email}`" v-html="contact.bigLinkText"></a>
      </div>

      <div class="footer-bar">
        <div class="footer-bar__left">
          <span class="footer-logo">{{ footer.logo }}</span>
          <span class="footer-tagline">{{ footer.tagline }}</span>
          <span class="footer-copy">{{ footer.copyright }}</span>
          <a rel="nofollow" target="_blank" class="footer-tooplate" :href="footer.attributionHref">{{ footer.attributionText }}</a>
        </div>
        <span class="footer-bar__center" aria-hidden="true">{{ footer.center }}</span>
        <div class="footer-bar__right">
          <a v-for="soc in footer.socials" :key="soc.label" :href="soc.href" class="footer-link">{{ soc.label }}</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
defineProps({
  contact: { type: Object, required: true },
  footer: { type: Object, required: true },
})
</script>
