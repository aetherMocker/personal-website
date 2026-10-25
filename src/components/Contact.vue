<script setup>
  import { site } from "../content/site";
</script>

<template>
  <section id="contact" class="box contact">
    <div class="box__head">
      <span class="box__title">{{ site.contact.label }}</span>
      <span class="box__side">{{ site.contact.title }}</span>
    </div>
    <div class="box__body">
      <a
        :href="`mailto:${site.contact.email}`"
        class="contact__big"
        v-html="site.contact.bigLinkText"
      ></a>

      <p class="contact__quote" v-html="site.contact.manifesto"></p>

      <dl class="rows">
        <div class="rows__row">
          <dt>{{ site.contact.getInTouchLabel }}</dt>
          <dd>{{ site.contact.email }}</dd>
        </div>
        <div class="rows__row">
          <dt>{{ site.contact.locationLabel }}</dt>
          <dd v-html="site.contact.location"></dd>
        </div>
        <div v-if="site.contact.resumeHref" class="rows__row">
          <dt>Résumé</dt>
          <dd>
            <a
              :href="site.contact.resumeHref"
              target="_blank"
              rel="noopener"
              class="btn"
            >{{ site.contact.resumeLabel }}</a>
          </dd>
        </div>
      </dl>

      <div class="socials">
        <a
          v-for="soc in site.footer.socials"
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