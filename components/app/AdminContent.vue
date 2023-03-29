<template>
  <div
    class="admin-content prose max-w-none prose-headings:my-3 prose-p:my-3 prose-ul:my-3 prose-img:my-3"
  >
    <slot />
  </div>
</template>

<style>
.admin-content ul,
.admin-content ol {
  list-style-type: none;
  padding: 0;
}

.admin-content ul,
.admin-content ol {
  display: flex;
  flex-direction: column;
  list-style-type: none;
}

.admin-content li {
  padding: 0 0 0 16px;
  margin: 0.25rem 0;
  position: relative;
  display: block;
  font-weight: 400;
  font-size: 1rem;
}

.admin-content li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #133654;
}

.admin-content img {
  width: auto !important;
  height: auto !important;
  max-width: 100% !important;
  max-height: 400px !important;
  object-fit: contain !important;
}
</style>
