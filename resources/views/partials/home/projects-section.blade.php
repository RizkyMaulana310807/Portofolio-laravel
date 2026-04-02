<div class="w-screen h-screen flex items-center justify-center">
    <div id="track" class="flex flex-row items-center overflow-x-scroll overflow-y-hidden project-card" style="
            width: 100vw;
            height: 100%;
            flex-wrap: nowrap;
            gap: 2rem;
            padding: 0 2rem;
            scrollbar-width: none;
            -ms-overflow-style: none;
        ">
        <x-project-card title="Pengalaman Magang" subtitle="GAMELAB INDONESIA" number="01"
            image="https://www.gamelab.id/img/share-v3.png?v=3.12" :tags="['Intern', 'Javascript', 'Phaser.JS', 'Game Developer']" icon="fa-briefcase" :playable="false" />
        <x-project-card title="Pengalaman Freelance" subtitle="SMKN 4 Padalarang" number="02"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Logosmkn4padalarang.jpg/250px-Logosmkn4padalarang.jpg"
            :tags="['Freelance', 'Phaser.JS', 'Javascript', 'PHP', 'Laravel', 'MySQL', 'React Native', 'Game Developer', 'Backend Developer']" :playable="false" />
    </div>
</div>