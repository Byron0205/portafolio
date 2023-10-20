<template>
    <Container class="w-full">
        <TitleCard>Habilidades</TitleCard>
        <div class="flex flex-wrap justify-center items-center gap-4 my-3">
                <p class="text-[20px] text-center cursor-pointer" title="python">
                <Icon name="skill-icons:python-light" size="50px"/>
                </p>
            
                <p class="text-[20px] text-center cursor-pointer" title="javascript">
                <Icon name="skill-icons:javascript" size="50px"/>        
                </p>

                <p class="text-[20px] text-center cursor-pointer" title="vue">
                <Icon name="skill-icons:vuejs-light" size="50px"/>
                </p>
                
                <p class="text-[20px] text-center cursor-pointer" title="css">
                <Icon name="skill-icons:css" size="50px"/>
                </p>
                
                <p class="text-[20px] text-center cursor-pointer" title="fastapi">
                <Icon name="skill-icons:fastapi" size="50px"/>
                </p>
                
                <p class="text-[20px] text-center cursor-pointer" title="MySql">
                <Icon name="skill-icons:mysql-light" size="50px"/>
                </p>
                
                <p class="text-[20px] text-center cursor-pointer" title="SqlServer">
                <Icon name="devicon-plain:microsoftsqlserver-wordmark" size="50px"/>
                </p>
                
                <p class="text-[20px] text-center cursor-pointer" title="Git">
                <Icon name="skill-icons:git" size="50px"/>
                </p>

        </div>
    </Container>
</template>

<script setup>
import { ref } from 'vue';

const porcentaje = ref(45);

</script>

<style></style>