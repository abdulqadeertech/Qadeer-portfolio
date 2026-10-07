// Drop photos in src/assets (profile.jpg) and src/assets/projects (<project id>.jpg). Used automatically if present.
const files = import.meta.glob('../assets/**/*.{jpg,jpeg,png,webp}', { eager: true, query: '?url', import: 'default' })
export const asset = (name) => Object.entries(files).find(([k]) => k.includes(`/${name}.`))?.[1]
