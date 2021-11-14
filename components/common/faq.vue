<template>
    <div>
        <section id="faq" class="faq">
            <div class="container">

                <div class="section-faq">
                <p>F.A.Q</p>
                </div>

                <ul class="faq-list mx-4 mx-sm-3">

                <li class="animate__animated animate__fadeInUp" style="animation-delay: 0.5s">
                    <div data-bs-toggle="collapse"
                        href="#faq1"
                        class="collapsed question">
                        Am I only allowed to order the same type of food as my Dabao-er?
                        <i class="fas fa-chevron-right icon-show"></i><i class="fas fa-chevron-down icon-close"></i>
                    </div>
                    <div id="faq1" class="collapse" data-bs-parent=".faq-list">
                        <p class="text-muted">
                            Feel free to order food from any stall from the same hawker centre as your Dabao-er. <br><br>
                            We will match you according to your postal code and create a session chat between you and your Dabao-er, where you can specify the order details.
                        </p>
                    </div>
                </li>

                <li class="animate__animated animate__fadeInUp" style="animation-delay: 1s">
                    <div data-bs-toggle="collapse"
                        href="#faq2"
                        class="collapsed question">
                        How do Dabao-ers fulfil orders and receive ratings?
                        <i class="fas fa-chevron-right icon-show"></i><i class="fas fa-chevron-down icon-close"></i>
                    </div>
                    <div id="faq2" class="collapse" data-bs-parent=".faq-list">
                        <p class="text-muted">
                            Dabao-ers will be able to use the chat to communicate with all Leechers who have joined the session and get all order details and delivery instructions. <br><br>
                            Once a session has been ended by the Dabao-er, the session status will become inactive. Leechers can then rate their Dabao-er by navigating to the top right-hand corner of the inactive session.
                        </p>
                    </div>
                </li>

                <li class="animate__animated animate__fadeInUp" style="animation-delay: 1.5s">
                    <div data-bs-toggle="collapse"
                        href="#faq3"
                        class="collapsed question">
                        How many active sessions can I create or join at the same time?
                        <i class="fas fa-chevron-right icon-show"></i><i class="fas fa-chevron-down icon-close"></i>
                    </div>
                    <div id="faq3" class="collapse" data-bs-parent=".faq-list">
                        <p class="text-muted">
                            As a Dabao-er, you can create only one Dabao session to take orders from Leechers.
                            <br><br>
                            As a Leecher, you can join as many sessions as you want to place your orders from different Dabao-ers (e.g. for more than one location).
                        </p>
                    </div>
                </li>

                <li class="animate__animated animate__fadeInUp" style="animation-delay: 2s">
                    <div data-bs-toggle="collapse"
                        href="#faq4"
                        class="collapsed question">
                        Are there any fees involved?
                        <i class="fas fa-chevron-right icon-show"></i><i class="fas fa-chevron-down icon-close"></i>
                    </div>
                    <div id="faq4" class="collapse" data-bs-parent=".faq-list">
                        <p class="text-muted">
                        While our platform does not charge any fees, do discuss with your Dabao-er to see if a small charge is applicable. This can be decided between you and your Dabao-er through the chat session feature.
                        </p>
                    </div>
                </li>

                <li class="animate__animated animate__fadeInUp" style="animation-delay: 2.5s">
                    <div data-bs-toggle="collapse"
                        href="#faq5"
                        class="collapsed question">
                        Why should I use DabaoHero over other delivery platforms?
                        <i class="fas fa-chevron-right icon-show"></i><i class="fas fa-chevron-down icon-close"></i>
                    </div>
                    <div id="faq5" class="collapse" data-bs-parent=".faq-list">
                        <p class="text-muted">
                            DabaoHero is a non-profit platform that is community-driven, eliminating all fees and charges posed on local hawker businesses when opting for deliveries. This means that there are no marked-up food prices and delivery fees for customers when compared with other delivery platforms.
                        </p>
                    </div>
                </li>

                </ul>

            </div>

        </section>
    </div>
</template>

<script>
export default {
  name: 'FAQ',
};
</script>

<style>

    .section-faq {
    text-align: center;
    padding-bottom: 30px;
    }

    .section-faq p {
    padding-bottom: 15px;
    margin-bottom: 15px;
    position: relative;
    font-size: 32px;
    font-weight: 700;
    color:  #807169;
    }
    .section-faq p::after {
    content: "";
    position: absolute;
    display: block;
    width: 60px;
    height: 2px;
    background: #e79450;
    bottom: 0;
    left: calc(50% - 30px);
    }

    .faq {
    padding: 60px 0;
    }
    .faq .faq-list {
    padding: 0;
    list-style: none;
    }
    .faq .faq-list li {
    border-bottom: 1px solid #eae7e5ec;
    margin-bottom: 20px;
    padding-bottom: 20px;
    }
    .faq .faq-list .question {
    display: block;
    position: relative;
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    font-weight: 600;
    padding-left: 25px;
    cursor: pointer;
    color: #e79450;
    transition: 0.3s;
    }
    .faq .faq-list i {
    font-size: 16px;
    position: absolute;
    left: 0;
    top: 4px;
    }
    .faq .faq-list p {
    margin-bottom: 0;
    padding: 10px 0 0 25px;
    }
    .faq .faq-list .icon-show {
    display: none;
    }
    .faq .faq-list .collapsed {
    color: #343a40;
    }
    .faq .faq-list .collapsed:hover {
    color: #e79450;
    }
    .faq .faq-list .collapsed .icon-show {
    display: inline-block;
    transition: 0.8s;
    }
    .faq .faq-list .collapsed .icon-close {
    display: none;
    transition: 0.8s;
    }
</style>
