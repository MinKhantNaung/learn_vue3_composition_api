<template>
    <div>
        <hr>
        <h1>Multiple Slot (name slots and scoped slots)</h1>
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>