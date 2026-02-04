<template>
    <div class="relative inline-block" ref="switcherRef">
        <button 
            @click="isOpen = !isOpen" 
            class="flex items-center justify-between gap-2 w-full px-3 py-2 text-sm bg-white border border-gray-300 rounded-lg hover:border-gray-400 focus:outline-none focus:ring-1 focus:border-transparent transition-colors cursor-pointer"
        >
            <span class="text-gray-700">{{ locale }}</span>
            <svg 
                class="w-4 h-4 text-gray-400 transition-transform duration-200" 
                :class="{ 'rotate-180': isOpen }"
                viewBox="0 0 20 20" 
                fill="currentColor"
            >
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
        </button>
        
        <Transition
            enter-active-class="transition-opacity duration-100"
            enter-from-class="opacity-0"
            leave-active-class="transition-opacity duration-75"
            leave-to-class="opacity-0"
        >
            <div 
                v-if="isOpen" 
                class="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-50"
            >
                <button 
                    v-for="option in locales" 
                    :key="option.value"
                    @click="selectLocale(option.value)"
                    class="flex items-center justify-between w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
                    :class="{ 'bg-gray-100': locale === option.value }"
                >
                    <span>{{ option.label }}</span>
                    <svg 
                        v-if="locale === option.value" 
                        class="w-4 h-4 text-gray-400" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                    >
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const locale = ref('EN')
const isOpen = ref(false)
const switcherRef = ref(null)

const locales = [
    { value: 'DA', label: 'DA' },
    { value: 'EN', label: 'EN' }
]

// Initialize locale from cookie on mount
onMounted(() => {
    const cookies = document.cookie.split('; ')
    const localeCookie = cookies.find(row => row.startsWith('locale='))
    if (localeCookie) {
        locale.value = localeCookie.split('=')[1]
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
})

// Close dropdown when clicking outside
const handleClickOutside = (event) => {
    if (switcherRef.value && !switcherRef.value.contains(event.target)) {
        isOpen.value = false
    }
}

// Function to select and switch locale
const selectLocale = (newLocale) => {
    locale.value = newLocale
    isOpen.value = false
    
    // Set cookie with 1 year expiration
    const expiryDate = new Date()
    expiryDate.setFullYear(expiryDate.getFullYear() + 1)
    document.cookie = `locale=${locale.value}; expires=${expiryDate.toUTCString()}; path=/`
    
    // Reload page to apply new locale
    window.location.reload()
}
</script>
