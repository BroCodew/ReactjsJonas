import React from 'react'
import "./index.scss"
import { images } from '../Translate/images'
import { CheckCircleIcon, HamburgerIcon } from '@chakra-ui/icons'

const EvonDev = () => {

    return (
        // <div className='container'>
        //     <div className='box box1'>
        //         <p>Box 1</p>
        //         <p>Flex item</p>

        //     </div>
        //     <div className='box box2'>
        //         <p>Box 2</p>
        //         <p>Flex item</p>
        //     </div>
        //     <div className='box box3'>
        //         <p>Box 3</p>
        //         <p>Flex item</p>
        //     </div>
        // </div>
        // <div className="cards">
        //     <div className='card'>
        //         <img
        //             className='card-image'
        //             src="https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        //         <div className='card-content'>
        //             <div className="card-top">
        //                 <h3 className='card-title'>2020 Word Champs Gaming Warzone</h3>
        //                 <div className="card-user">
        //                     <img
        //                         className='card-user-avatar'
        //                         src="https://images.unsplash.com/photo-1586407014176-b592d6e2d16b?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1586407014176-b592d6e2d16b?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        //                     />
        //                     <div className='card-user-info'>
        //                         <div className='card-user-top'>
        //                             <h4 className='card-user-name'>Tam Tran</h4>
        //                             <CheckCircleIcon />
        //                         </div>
        //                         <div className="card-user-game">Call of duty</div>
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className="card-bottom">
        //                 <div className="card-live">
        //                     <HamburgerIcon />
        //                     <span>Live</span>
        //                 </div>
        //                 <div className="card-watching">4.2 watching</div>
        //             </div>
        //         </div>
        //     </div>
        //     <div className='card'>
        //         <img
        //             className='card-image'
        //             src="https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        //         <div className='card-content'>
        //             <div className="card-top">

        //                 <h3 className='card-title'>2020 Word Champs Gaming Warzone2020 Word Champs Gaming Warzone2020 Word Champs Gaming Warzone2020 Word Champs Gaming Warzone</h3>
        //                 <div className="card-user">
        //                     <img
        //                         className='card-user-avatar'
        //                         src="https://images.unsplash.com/photo-1586407014176-b592d6e2d16b?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1586407014176-b592d6e2d16b?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        //                     />
        //                     <div className='card-user-info'>
        //                         <div className='card-user-top'>
        //                             <h4 className='card-user-name'>Tam Tran</h4>
        //                             <CheckCircleIcon />
        //                         </div>
        //                         <div className="card-user-game">Call of duty</div>
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className="card-bottom">
        //                 <div className="card-live">
        //                     <HamburgerIcon />
        //                     <span>Live</span>
        //                 </div>
        //                 <div className="card-watching">4.2 watching</div>
        //             </div>
        //         </div>
        //     </div>
        //     <div className='card'>
        //         <img
        //             className='card-image'
        //             src="https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        //         <div className='card-content'>
        //             <div className="card-top">

        //                 <h3 className='card-title'>2020 Word Champs Gaming Warzone</h3>
        //                 <div className="card-user">
        //                     <img
        //                         className='card-user-avatar'
        //                         src="https://images.unsplash.com/photo-1586407014176-b592d6e2d16b?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1586407014176-b592d6e2d16b?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        //                     />
        //                     <div className='card-user-info'>
        //                         <div className='card-user-top'>
        //                             <h4 className='card-user-name'>Tam Tran</h4>
        //                             <CheckCircleIcon />
        //                         </div>
        //                         <div className="card-user-game">Call of duty</div>
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className="card-bottom">
        //                 <div className="card-live">
        //                     <HamburgerIcon />
        //                     <span>Live</span>
        //                 </div>
        //                 <div className="card-watching">4.2 watching</div>
        //             </div>
        //         </div>
        //     </div>
        //     <div className='card'>
        //         <img
        //             className='card-image'
        //             src="https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        //         <div className='card-content'>
        //             <div className="card-top">

        //                 <h3 className='card-title'>2020 Word Champs Gaming Warzone</h3>
        //                 <div className="card-user">
        //                     <img
        //                         className='card-user-avatar'
        //                         src="https://images.unsplash.com/photo-1586407014176-b592d6e2d16b?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1586407014176-b592d6e2d16b?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        //                     />
        //                     <div className='card-user-info'>
        //                         <div className='card-user-top'>
        //                             <h4 className='card-user-name'>Tam Tran</h4>
        //                             <CheckCircleIcon />
        //                         </div>
        //                         <div className="card-user-game">Call of duty</div>
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className="card-bottom">
        //                 <div className="card-live">
        //                     <HamburgerIcon />
        //                     <span>Live</span>
        //                 </div>
        //                 <div className="card-watching">4.2 watching</div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="cards">
            <div className="card">
                <img
                    src="https://images.unsplash.com/reserve/HgZuGu3gSD6db21T3lxm_San%20Zenone.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt=""
                    className="card-image"
                />
                <div className="card-content">
                    <div className="card-top">
                        <h3 className="card-title">2020 World Champs Gaming Warzone</h3>
                        <div className="card-user">
                            <img
                                src="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                alt=""
                                className="card-user-avatar"
                            />
                            <div className="card-user-info">
                                <div className="card-user-top">
                                    <h4 className="card-user-name">Tam Tran</h4>
                                    <CheckCircleIcon />
                                </div>
                                <div className="card-user-game">Call of duty</div>
                            </div>
                        </div>
                    </div>
                    <div className="card-bottom">
                        <div className="card-live">
                            <HamburgerIcon />
                            <span>Live</span>
                        </div>
                        <div className="card-watching">4.2k watching</div>
                    </div>
                    <div className="card-end">
                        <div className="card-live">
                            <HamburgerIcon />
                            <span>Live</span>
                        </div>
                        <div className="card-watching">4.2k watching</div>
                    </div>
                </div>
            </div>
            <div className="card">
                <img
                    src="https://images.unsplash.com/reserve/HgZuGu3gSD6db21T3lxm_San%20Zenone.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt=""
                    className="card-image"
                />
                <div className="card-content">
                    <div className="card-top">
                        <h3 className="card-title">
                            2020 World Champs Gaming
                            WarzoneGamingGamingGamingGamingGamingGamingGamingGamingGamingGamingGamingGamingGamingGamingGamingGamingGamingGaming
                        </h3>
                        <div className="card-user">
                            <img
                                src="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                alt=""
                                className="card-user-avatar"
                            />
                            <div className="card-user-info">
                                <div className="card-user-top">
                                    <h4 className="card-user-name">Tam Tran</h4>
                                    <CheckCircleIcon />
                                </div>
                                <div className="card-user-game">Call of duty</div>
                            </div>
                        </div>
                    </div>
                    <div className="card-bottom">
                        <div className="card-live">
                            <HamburgerIcon />
                            <span>Live</span>
                        </div>
                        <div className="card-watching">4.2k watching</div>
                    </div>
                    <div className="card-end">
                        <div className="card-live">
                            <HamburgerIcon />
                            <span>Live</span>
                        </div>
                        <div className="card-watching">4.2k watching</div>
                    </div>
                </div>
            </div>
            <div className="card">
                <img
                    src="https://images.unsplash.com/reserve/HgZuGu3gSD6db21T3lxm_San%20Zenone.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt=""
                    className="card-image"
                />
                <div className="card-content">
                    <div className="card-top">
                        <h3 className="card-title">
                            2020 World Champs Gaming Warzone 2020 World Champs Gaming Warzone
                        </h3>
                        <div className="card-user">
                            <img
                                src="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                alt=""
                                className="card-user-avatar"
                            />
                            <div className="card-user-info">
                                <div className="card-user-top">
                                    <h4 className="card-user-name">Tam Tran</h4>
                                    <CheckCircleIcon />
                                </div>
                                <div className="card-user-game">Call of duty</div>
                            </div>
                        </div>
                    </div>
                    <div className="card-bottom">
                        <div className="card-live">
                            <HamburgerIcon />
                            <span>Live</span>
                        </div>
                        <div className="card-watching">4.2k watching</div>
                    </div>
                    <div className="card-end">
                        <div className="card-live">
                            <HamburgerIcon />
                            <span>Live</span>
                        </div>
                        <div className="card-watching">4.2k watching</div>
                    </div>
                </div>
            </div>
            <div className="card">
                <img
                    src="https://images.unsplash.com/reserve/HgZuGu3gSD6db21T3lxm_San%20Zenone.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt=""
                    className="card-image"
                />
                <div className="card-content">
                    <div className="card-top">
                        <h3 className="card-title">2020 World Champs Gaming Warzone</h3>
                        <div className="card-user">
                            <img
                                src="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                alt=""
                                className="card-user-avatar"
                            />
                            <div className="card-user-info">
                                <div className="card-user-top">
                                    <h4 className="card-user-name">Tam Tran</h4>
                                    <CheckCircleIcon />
                                </div>
                                <div className="card-user-game">Call of duty</div>
                            </div>
                        </div>
                    </div>
                    <div className="card-bottom">
                        <div className="card-live">
                            <HamburgerIcon />
                            <span>Live</span>
                        </div>
                        <div className="card-watching">4.2k watching</div>
                    </div>
                    <div className="card-end">
                        <div className="card-live">
                            <HamburgerIcon />
                            <span>Live</span>
                        </div>
                        <div className="card-watching">4.2k watching</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EvonDev
