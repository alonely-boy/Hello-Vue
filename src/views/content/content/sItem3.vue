<template>
    <div>
        <poem>
            <div slot="header">宋词鉴赏——宋祁</div>
            <p slot="center_h">玉楼春·春景</p>
            <div slot="center">
                <p>东城渐觉风光好。縠皱波纹迎客棹。</p>
                <p>绿杨烟外晓寒轻，红杏枝头春意闹。</p>
                <p>浮生长恨欢娱少。肯爱千金轻一笑。</p>
                <p>为君持酒劝斜阳，且向花间留晚照。</p>
            </div>
            <div slot="right">&nbsp;&nbsp;宋祁（998—1061），宋代文学家。字子京，安州安陆（今属湖北）人，
              后迁开封雍丘（今河南杞县）。宋天圣二年（1024）进士。历官国子监直讲、太常博士、工部尚书员外郎、
              知制诰、史馆修撰、翰林学士承旨等。卒谥景文。其诗词多写优游闲适生活，语言工丽，描写生动，有“红杏枝头
              春意闹”（《玉楼春·春景》）之句，世称“红杏尚书”。有集，已佚，今有清辑本《宋景文集》；词有《宋景文公长短句》。</div>
            <div slot="footer">漫步东城感受到风光越来越好，船儿行驶在波纹骤起的水面上。拂晓的轻寒笼罩着如烟的杨柳，惟见那红艳艳的杏花簇绽枝头。
人生总是怨恨苦恼太多欢娱少，谁惜千金却轻视美人迷人一笑？为君手持酒盏劝说金色的斜阳，且为聚会向花间多留一抹晚霞。既然春天如此可贵可爱，词人禁不住“为君持酒劝斜阳”，明确提出“且向花间留晚照”的强烈主观要求。这要求是“无理”的，因此也是不可能的，却能够充分地表现出词人对春天的珍视，对光阴的爱惜。
            </div>
        </poem>
    </div>
</template>

<script>
import Poem from '../Poem'
export default {
    name:'sItem3',
    components:{
        Poem
    }
}
</script>