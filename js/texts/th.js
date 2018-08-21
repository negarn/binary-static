const texts_json = {};
texts_json['TH'] = {"Day":"วัน","Month":"เดือน","Year":"ปี","Sorry,_an_error_occurred_while_processing_your_request_":"ขออภัย มีความผิดพลาดเกิดขึ้นขณะที่ประมวลผลความประสงค์ของท่าน","Please_[_1]log_in[_2]_or_[_3]sign_up[_4]_to_view_this_page_":"โปรด [_1] ลงชื่อเข้าใช้ [_2] หรือ [_3] ลงทะเบียน [_4] เพื่อเข้าชมหน้านี้","Click_here_to_open_a_Real_Account":"คลิกที่นี่ เพื่อเปิดบัญชีจริง","Open_a_Real_Account":"เปิดบัญชีจริง","Click_here_to_open_a_Financial_Account":"คลิกที่นี่ เพื่อเปิดบัญชีการเงิน","Open_a_Financial_Account":"เปิดบัญชีทางการเงิน","Network_status":"สถานะของเครือข่าย","Online":"ออนไลน์","Offline":"ออฟไลน์","Connecting_to_server":"กำลังเชื่อมต่อกับเซิร์ฟเวอร์","Virtual_Account":"บัญชีทดลองใช้","Real_Account":"บัญชีจริง","Investment_Account":"บัญชีเพื่อการลงทุน","Gaming_Account":"บัญชีการพนัน","Sunday":"วันอาทิตย์","Monday":"วันจันทร์","Tuesday":"วันอังคาร","Wednesday":"วันพุธ","Thursday":"วันพฤหัสบดี","Friday":"วันศุกร์","Saturday":"วันเสาร์","Su":"อา","Mo":"จ","Tu":"อัง","We":"พวกเรา","Th":"พฤ","Fr":"ศ","Sa":"ส","January":"มกราคม","February":"กุมภาพันธ์","March":"มีนาคม","April":"เมษายน","May":"พฤษภาคม","June":"มิถุนายน","July":"กรกฎาคม","August":"สิงหาคม","September":"กันยายน","October":"ตุลาคม","November":"พฤศจิกายน","December":"ธันวาคม","Jan":"ม.ค.","Feb":"ก.พ.","Mar":"มี.ค.","Apr":"เม.ย.","Jun":"มิ.ย.","Jul":"ก.ค.","Aug":"ส.ค.","Sep":"ก.ย.","Oct":"ต.ค.","Nov":"พ.ย.","Dec":"ธ.ค.","Next":"ถัดไป","Previous":"ก่อนหน้า","Hour":"ชั่วโมง","Minute":"นาที","AM":"น.","PM":"น.","Time_is_in_the_wrong_format_":"เวลาอยู่ในรูปแบบที่ไม่ถูกต้อง","Purchase_Time":"เวลาซื้อ","Charting_for_this_underlying_is_delayed":"กราฟของผลิตภัณฑ์อ้างอิงนี้ล่าช้า","Payout_Range":"ช่วงการชำระเงิน","Tick_[_1]":"ช่วงราคา [_1]","Ticks_history_returned_an_empty_array_":"ประวัติช่วงราคาถูกส่งกลับมาเป็นแถวลำดับว่างเปล่า","Chart_is_not_available_for_this_underlying_":"ไม่มีแผนภูมิสำหรับผลิตภัณฑ์อ้างอิงนี้","year":"ปี","month":"เดือน","week":"สัปดาห์","day":"วัน","days":"วัน","h":"ชม.","hour":"ชั่วโมง","hours":"ชั่วโมง","min":"นาที","minute":"นาที","minutes":"นาที","second":"วินาที","seconds":"วินาที","tick":"ช่วงห่างของราคา","ticks":"ช่วงห่างของราคา","Loss":"ขาดทุน","Profit":"กำไร","Payout":"การชำระเงิน","Units":"หน่วย","Stake":"วางเงิน","Duration":"ระยะเวลา","End_Time":"เวลาสิ้นสุด","Net_profit":"กำไรสุทธิ","Return":"ผลตอบแทน","Now":"ขณะนี้","Contract_Confirmation":"การยืนยันสัญญา","Your_transaction_reference_is":"เลขที่อ้างอิงของธุรกรรมของท่าน คือ","Even/Odd":"คู่/คี่","Ends_Between/Ends_Outside":"สิ้นสุดระหว่าง/สิ้นสุดนอกขอบเขต","Stays_Between/Goes_Outside":"อยู่ใน/นอกขอบเขต","High/Low_Ticks":"ช่วงราคา สูง/ต่ำ","Potential_Payout":"ประมาณการจำนวนเงินที่ชำระ","Maximum_Payout":"ยอดเงินที่ได้รับสูงสุด","Total_Cost":"ราคารวม","Potential_Profit":"ประมาณการกำไร","Maximum_Profit":"กำไรสูงสุด","View":"ดู","Tick":"ช่วงห่างของราคา","Buy_price":"ราคาซื้อ","Final_price":"ราคาสุดท้าย","Chart":"แผนภูมิ","Portfolio":"พอร์ตโฟลิโอ","Explanation":"คำอธิบาย","Last_Digit_Stats":"สถิติตัวเลขสุดท้าย","Waiting_for_entry_tick_":"กำลังรองช่วงราคาเริ่มต้น","Waiting_for_exit_tick_":"กำลังรอช่วงราคาสุดท้าย","Please_log_in_":"โปรดเข้าสู่ระบบ","All_markets_are_closed_now__Please_try_again_later_":"ตลาดได้ปิดทำการแล้ว โปรดทำรายการใหม่ภายหลัง","Account_balance:":"ยอดคงเหลือในบัญชี:","Try_our_[_1]Volatility_Indices[_2]_":"ลองดัชนีผันผวน [_1][_2] ของเรา","Try_our_other_markets_":"ลองตลาดอื่นๆ ของเรา","Session":"เซสชัน","Crypto":"การเข้ารหัสลับ","Fiat":"เงินกระดาษ","High":"สูง","Low":"ต่ำ","Close":"ปิด","Payoff":"ผลตอบแทน","High-Close":"สูง-ปิด","Close-Low":"ปิด-ต่ำ","High-Low":"สูง-ต่ำ","Search___":"ค้นหา...","Select_Asset":"เลือกสินทรัพย์","The_reset_time_is_[_1]":"เวลารีเซ็ตเป็น [_1]","Purchase":"ซื้อ","Purchase_request_sent":"คำขอสั่งซื้อได้ถูกส่งแล้ว","Add_+/–_to_define_a_barrier_offset__For_example,_+0_005_means_a_barrier_that's_0_005_higher_than_the_entry_spot_":"เพิ่ม +/ – เพื่อกำหนด Barrier Offset เช่น +0.005 หมายถึง อุปสรรคที่อยู่สูงกว่าสปอตเริ่มต้นอยู่ 0.005","Please_reload_the_page":"โปรดโหลดหน้านี้อีกครั้ง","Trading_is_unavailable_at_this_time_":"ไม่สามารถทำการซื้อขายได้ในขณะนี้","Your_account_is_fully_authenticated_and_your_withdrawal_limits_have_been_lifted_":"บัญชีของท่านได้รับการยืนยันตัวตนอย่างสมบูรณ์แล้ว และวงเงินการถอนเงินของท่านได้รับการยกระดับโดยการเพิ่มวงเงินแล้ว","Your_withdrawal_limit_is_[_1]_[_2]_":"วงเงินการถอนของท่าน คือ [_1] [_2]","Your_withdrawal_limit_is_[_1]_[_2]_(or_equivalent_in_other_currency)_":"วงเงินการถอนของท่าน คือ [_1] [_2] (หรือเทียบเท่าในสกุลเงินอื่น)","You_have_already_withdrawn_[_1]_[_2]_":"ท่านได้ถอน [_1] [_2] เรียบร้อยแล้ว","You_have_already_withdrawn_the_equivalent_of_[_1]_[_2]_":"ท่านได้ถอน [_1] [_2] หรือเทียบเท่า","Therefore_your_current_immediate_maximum_withdrawal_(subject_to_your_account_having_sufficient_funds)_is_[_1]_[_2]_":"ดังนั้น วงเงินการถอนมากที่สุดของท่านขณะนี้ (หากบัญชีท่านมีวงเงินเพียงพอ) คือ [_1] [_2]","Therefore_your_current_immediate_maximum_withdrawal_(subject_to_your_account_having_sufficient_funds)_is_[_1]_[_2]_(or_equivalent_in_other_currency)_":"ดังนั้น วงเงินการถอนมากที่สุดของท่านขณะนี้ (หากบัญชีท่านมีวงเงินเพียงพอ) คือ [_1] [_2] (หรือเทียบเท่าในสกุลเงินอื่น)","Your_[_1]_day_withdrawal_limit_is_currently_[_2]_[_3]_(or_equivalent_in_other_currency)_":"วงเงินการถอนเงินต่อวันของท่าน [_1] ในปัจจุบัน คือ [_2] [_3] (หรือเทียบเท่าในสกุลเงินอื่น)","You_have_already_withdrawn_the_equivalent_of_[_1]_[_2]_in_aggregate_over_the_last_[_3]_days_":"ท่านได้ถอน [_1] [_2] หรือเทียบเท่า ในช่วง [_3] วันที่ผ่านมา","Contracts_where_the_barrier_is_the_same_as_entry_spot_":"สัญญาซึ่งมีค่า Barrier ที่เหมือนกับค่าเริ่มต้น","Contracts_where_the_barrier_is_different_from_the_entry_spot_":"สัญญาซึ่งมี Barrier ที่แตกต่างจากค่าเริ่มต้น","ATM":"เอทีเอ็ม","Duration_up_to_7_days":"ระยะเวลาไม่เกิน 7 วัน","Duration_above_7_days":"ระยะเวลามากกว่า 7 วัน","Major_Pairs":"คู่หลัก","Forex":"ฟอเร็กซ์","This_field_is_required_":"ข้อมูลในช่องนี้จำเป็นต้องมี","Please_select_the_checkbox_":"โปรดระบุค่าจากตัวเลือก","Please_accept_the_terms_and_conditions_":"โปรดยอมรับข้อตกลงและเงื่อนไข","Only_[_1]_are_allowed_":"มีเพียง [_1] ที่อนุญาตให้ใช้","letters":"ตัวอักษร","numbers":"Numbers","space":"ช่องว่าง","Sorry,_an_error_occurred_while_processing_your_account_":"ขออภัย มีความผิดพลาดเกิดขึ้นขณะที่ประมวลผลบัญชีของท่าน","Your_changes_have_been_updated_successfully_":"การแก้ไขของท่านถูกดำเนินการเรียบร้อยแล้ว","Your_settings_have_been_updated_successfully_":"การตั้งค่าของท่านถูกดำเนินการเรียบร้อยแล้ว","Female":"เพศหญิง","Male":"เพศชาย","Please_select_a_country":"โปรดระบุประเทศ","Please_confirm_that_all_the_information_above_is_true_and_complete_":"โปรดยืนยันว่า ข้อมูลทั้งหมดข้างต้นถูกต้อง และครบถ้วน","Your_application_to_be_treated_as_a_professional_client_is_being_processed_":"ใบสมัครของท่านเพื่อปรับสถานะเป็นลูกค้าผู้เชี่ยวชาญ (Professional Client) กำลังถูกดำเนินการ","You_are_categorised_as_a_retail_client__Apply_to_be_treated_as_a_professional_trader_":"ท่านอยู่ในกลุ่มลูกค้ารายย่อย (Retail Client) สมัครเพื่อเลื่อนขั้นเป็นลูกค้าผู้มีความเชี่ยวชาญ (Professional Client)","You_are_categorised_as_a_professional_client_":"ท่านอยู่ในกลุ่มลูกค้าผู้เชี่ยวชาญ (Professional Client)","Your_token_has_expired_or_is_invalid__Please_click_<a_href=\"[_1]\">here</a>_to_restart_the_verification_process_":"โทเค่นของท่านหมดอายุแล้ว โปรดคลิก<a href=\"[_1]\">ที่นี่</a> เพื่อดำเนินกระบวนการตรวจสอบ","The_email_address_provided_is_already_in_use__If_you_forgot_your_password,_please_try_our_<a_href=\"[_1]\">password_recovery_tool</a>_or_contact_our_customer_service_":"อีเมล์ของท่านถูกลงทะเบียนไว้กับผู้ใช้งานอีกบัญชีหนึ่ง หากท่านลืมรหัสผ่านของบัญชีที่ท่านมีอยู่ โปรด <a href=\"[_1]\">เรียกใช้การกู้คืนรหัสผ่าน</a> หรือ ติดต่อเจ้าหน้าที่บริการลูกค้า","Password_should_have_lower_and_uppercase_letters_with_numbers_":"รหัสผ่านควรประกอบด้วยอักษรตัวเล็ก อักษรตัวใหญ่ และตัวเลข","Password_is_not_strong_enough_":"รหัสผ่านไม่ปลอดภัยเท่าที่ควร","Your_session_duration_limit_will_end_in_[_1]_seconds_":"เวลาการซื้อขายของท่านจะสิ้นสุดภายใน [_1] วินาที","Invalid_email_address_":"อีเมล์ไม่ถูกต้อง","Thank_you_for_signing_up!_Please_check_your_email_to_complete_the_registration_process_":"ขอขอบคุณสำหรับการลงทะเบียน! โปรดตรวจสอบอีเมล์ของท่านเพื่อดำเนินการลงทะเบียนให้แล้วเสร็จ","Financial_Account":"บัญชีการเงิน","Upgrade_now":"อัพเกรดเดี๋ยวนี้","Please_select":"โปรดระบุ","Minimum_of_[_1]_characters_required_":"จำนวนตัวอักขระน้อยที่สุดที่ต้องการ คือ [_1]","Please_confirm_that_you_are_not_a_politically_exposed_person_":"โปรดยืนยันว่า ท่านไม่ใช่บุคคลที่เกี่ยวข้องกับการเมือง","Asset":"สินทรัพย์","Opens":"เปิด","Closes":"ปิด","Settles":"ชำระเงิน","Upcoming_Events":"กิจกรรมในอนาคต","Closes_early_(at_21:00)":"ปิดก่อนเวลา (เมื่อเวลา 21.00 น.)","Closes_early_(at_18:00)":"ปิดก่อนเวลา (เมื่อเวลา 18.00 น.)","New_Year's_Day":"วันปีใหม่","Christmas_Day":"วันคริสต์มาส","Fridays":"วันศุกร์","today":"วันนี้","today,_Fridays":"วันนี้วันศุกร์","Please_select_a_payment_agent":"โปรดระบุตัวแทนรับชำระเงิน","Payment_Agent_services_are_not_available_in_your_country_or_in_your_preferred_currency_":"ไม่มีบริการตัวแทนการชำระเงินในประเทศของท่าน หรือ ในสกุลเงินที่ท่านต้องการ","Invalid_amount,_minimum_is":"จำนวนไม่ถูกต้อง ค่าต่ำสุด คือ","Invalid_amount,_maximum_is":"จำนวนไม่ถูกต้อง ค่าสูงสุด คือ","Your_request_to_withdraw_[_1]_[_2]_from_your_account_[_3]_to_Payment_Agent_[_4]_account_has_been_successfully_processed_":"คำสั่งของท่านเพื่อถอน [_1] [_2] จากบัญชีของท่าน [_3] ให้ตัวแทนรับชำระเงิน [_4] บัญชีได้รับการประมวลผลสำเร็จ","Up_to_[_1]_decimal_places_are_allowed_":"ตำแหน่งทศนิยมถึง [_1] หลักเท่านั้น","Your_token_has_expired_or_is_invalid__Please_click_[_1]here[_2]_to_restart_the_verification_process_":"โทเค่นของท่านหมดอายุแล้ว หรือ โทเค่นไม่ถูกต้อง โปรดคลิก [_1]ที่นี่[_2] เพื่อดำเนินกระบวนการตรวจสอบ","New_token_created_":"สร้างโทเค่นใหม่แล้ว","The_maximum_number_of_tokens_([_1])_has_been_reached_":"จำนวนมากที่สุดของโทเค่น ([_1]) ถูกใช้หมดแล้ว","Name":"ชื่อ","Token":"โทเค่น","Last_Used":"ใช้ครั้งสุดท้าย","Scopes":"ขอบเขต","Never_Used":"ไม่เคยใช้","Delete":"ลบ","Are_you_sure_that_you_want_to_permanently_delete_the_token":"ท่านแน่ใจใช่ไหมที่จะลบโทเค่นถาวร","Please_select_at_least_one_scope":"โปรดระบุค่าอย่างน้อยหนึ่งขอบเขต","Guide":"คำแนะนำ","Finish":"เสร็จสิ้น","Step":"ขั้น","Select_your_market_and_underlying_asset":"เลือกตลาดที่ท่านต้องการ และ ผลิตภัณฑ์อ้างอิงของท่าน","Select_your_trade_type":"กำหนด ประเภทการเทรดของท่าน","Adjust_trade_parameters":"ปรับแต่งตัวแปรของการเทรด","Predict_the_direction<br_/>and_purchase":"พยากรณ์ทิศทาง<br />และซื้อ","Sorry,_this_feature_is_available_to_virtual_accounts_only_":"ขออภัย ฟังก์ชันนี้มีให้ใช้งานเฉพาะบัญชีทดลองใช้เท่านั้น","[_1]_[_2]_has_been_credited_into_your_virtual_account:_[_3]_":"[_1] [_2] ได้ถูกเพิ่มเข้าในบัญชีทดลองของท่านแล้ว: [_3]","years":"ปี","months":"เดือน","weeks":"สัปดาห์","Your_changes_have_been_updated_":"การเปลี่ยนแปลงของท่านได้ถูกดำเนินการแล้ว","Please_enter_an_integer_value":"โปรดป้อนจำนวนเต็ม","Session_duration_limit_cannot_be_more_than_6_weeks_":"รอบระยะเวลาการซื้อขายไม่สามารถมากกว่า 6 สัปดาห์","You_did_not_change_anything_":"ท่านไม่ได้แก้ไขค่าใดๆ","Please_select_a_valid_date_":"โปรดระบุวันที่ที่ถูกต้อง","Please_select_a_valid_time_":"โปรดระบุเวลาที่ถูกต้อง","Time_out_cannot_be_in_the_past_":"ช่วงเวลาที่ใช้อ้างอิงไม่สามารถเป็นเวลาในอดีต","Time_out_must_be_after_today_":"ช่วงเวลาอ้างอิงต้องเริ่มในวันพรุ่งนี้","Time_out_cannot_be_more_than_6_weeks_":"ช่วงระยะเวลาอ้างอิงไม่สามารถมากกว่า 6 สัปดาห์","Exclude_time_cannot_be_less_than_6_months_":"เวลาพักไม่น้อยกว่า 6 เดือน","Exclude_time_cannot_be_for_more_than_5_years_":"เวลาพักไม่เกิน 5 ปี","When_you_click_\"OK\"_you_will_be_excluded_from_trading_on_the_site_until_the_selected_date_":"เมื่อท่านเลือก \"OK\" ท่านจะถูกพักจากระบบซื้อขายกระทั่งวันที่ที่ท่านระบุ","Timed_out_until":"หมดเวลากระทั่ง","Excluded_from_the_website_until":"ถูกพักการใช้งานจากเว็บไซต์จนถึง","Ref_":"อ้างอิง","Resale_not_offered":"การขายสัญญาไม่ได้ถูกนำเสนอ","Date":"วันที่","Action":"การกระทำ","Contract":"สัญญา","Sale_Date":"วันที่ขาย","Sale_Price":"ราคาขาย","Total_Profit/Loss":"รวมกำไร/ขาดทุน","Your_account_has_no_trading_activity_":"บัญชีของท่านไม่มีประวัติการซื้อขาย","Today":"วันนี้","Details":"รายละเอียด","Sell":"ขาย","Buy":"ซื้อ","Virtual_money_credit_to_account":"เครดิตเงินเสมือนไปยังบัญชี","This_feature_is_not_relevant_to_virtual-money_accounts_":"ฟังก์ชันนี้ไม่สัมพันธ์กับบัญชีเงินเสมือน","Japan":"ประเทศญี่ปุ่น","Questions":"คำถาม","True":"จริง","False":"ผิด","There_was_some_invalid_character_in_an_input_field_":"จากข้อมูลที่ป้อนเข้ามา มีบางอักขระไม่ถูกต้อง","Please_follow_the_pattern_3_numbers,_a_dash,_followed_by_4_numbers_":"โปรดป้อนข้อมูลในรูปแบบ ตัวเลข 3 หลัก ขีดกลาง และตามด้วย ตัวเลข 4 หลักสุดท้าย","Score":"คะแนน","Weekday":"วันธรรมดาที่ไม่ใช่วันเสาร์อาทิตย์","Processing_your_request___":"กำลังดำเนินการตามความประสงค์ของท่าน","Please_check_the_above_form_for_pending_errors_":"โปรดตรวจสอบแบบฟอร์มข้างต้นสำหรับรายการข้อผิดพลาด","Digit_Matches":"ดิจิตตรงกัน (Digit Matches)","Digit_Differs":"ดิจิตไม่ตรงกัน (Digit Differs)","Digit_Odd":"ดิจิตคี่ (Digit Odd)","Digit_Even":"ดิจิตคู่ (Digit Even)","Digit_Over":"ดิจิตสูงกว่า (Digit Over)","Digit_Under":"ดิจิตต่ำกว่า (Digit Under)","Call_Spread":"คอลสเปรด","Put_Spread":"พุทสเปรด","High_Tick":"ราคาสูง","Low_Tick":"ราคาต่ำสุด","[_1]_[_2]_payout_if_[_3]_is_strictly_higher_than_or_equal_to_Barrier_at_close_on_[_4]_":"[_1] [_2] ชำระเงิน เมื่อ [_3] มีมูลค่าเท่ากันหรือสูงกว่า Barrier ที่สิ้นสุดเมื่อ [_4]","[_1]_[_2]_payout_if_[_3]_is_strictly_lower_than_Barrier_at_close_on_[_4]_":"[_1] [_2] ชำระเงิน เมื่อ [_3] มีมูลค่าเท่ากันหรือต่ำกว่า Barrier ที่สิ้นสุด ณ [_4]","[_1]_[_2]_payout_if_[_3]_does_not_touch_Barrier_through_close_on_[_4]_":"[_1] [_2] ชำระเงิน เมื่อ [_3] ไม่แตะ Barrier กระทั่งสิ้นสุดที่ [_4]","[_1]_[_2]_payout_if_[_3]_touches_Barrier_through_close_on_[_4]_":"[_1] [_2] ชำระเงิน เมื่อ [_3] แตะ Barrier กระทั่งสิ้นสุดที่ [_4]","[_1]_[_2]_payout_if_[_3]_ends_on_or_between_low_and_high_values_of_Barrier_at_close_on_[_4]_":"[_1] [_2] ชำระเงิน เมื่อ [_3] สิ้นสุดหรืออยู่ระหว่างค่าต่ำสุดและค่าสูงสุดของ Barrier ณ เวลาปิดที่ [_4]","[_1]_[_2]_payout_if_[_3]_ends_outside_low_and_high_values_of_Barrier_at_close_on_[_4]_":"[_1] [_2] ชำระเงิน เมื่อ [_3] สิ้นสุดนอกขอบเขต Barrier ต่ำสุดและสูงสุดและสิ้นสุดที่ [_4]","[_1]_[_2]_payout_if_[_3]_stays_between_low_and_high_values_of_Barrier_through_close_on_[_4]_":"[_1] [_2] ชำระเงิน เมื่อ [_3] อยู่ระหว่างค่าต่ำและสูงของ Barrier กระทั่งสิ้นสุดเมื่อ [_4]","[_1]_[_2]_payout_if_[_3]_goes_outside_of_low_and_high_values_of_Barrier_through_close_on_[_4]_":"[_1] [_2] ชำระเงิน เมื่อ [_3] ออกนอกขอบเขตของ Barrier ต่ำและสูง กระทั่งสิ้นสุดที่ [_4]","M":"ด","Higher":"สูงกว่า","Higher_or_equal":"สูงกว่า หรือ เท่ากับ","Lower":"ต่ำกว่า","Lower_or_equal":"ต่ำกว่า หรือ เท่ากับ","Touches":"แตะ","Does_Not_Touch":"ไม่แตะ","Ends_Between":"สิ้นสุดระหว่าง","Ends_Outside":"สิ้นสุดภายนอก","Stays_Between":"อยู่ระหว่าง","Goes_Outside":"ออกนอกขอบเขต","All_barriers_in_this_trading_window_are_expired":"รายการ Barrier ทั้งหมดในหน้าต่างซื้อขายนี้หมดอายุ","Remaining_time":"เวลาที่เหลืออยู่","Market_is_closed__Please_try_again_later_":"ตลาดได้ปิดทำการแล้ว โปรดทำรายการใหม่ภายหลัง","This_symbol_is_not_active__Please_try_another_symbol_":"ไม่มีสัญลักษณ์นี้ โปรดลองสัญลักษณ์อื่น","Sorry,_your_account_is_not_authorised_for_any_further_contract_purchases_":"ขออภัย บัญชีของท่านไม่ได้รับอนุญาตในการซื้อสัญญาเพิ่ม","Lots":"ล็อต","Payout_per_lot_=_1,000":"จ่ายต่อล็อต = 1,000","This_page_is_not_available_in_the_selected_language_":"หน้านี้ไม่ได้ถูกจัดทำในภาษาที่ท่านเลือก","Trading_Window":"หน้าต่างซื้อขาย","Percentage":"ร้อยละ","Digit":"ตัวเลข (Digits)","Amount":"จำนวน","Deposit":"ฝาก","Withdrawal":"ถอนเงิน","Your_request_to_transfer_[_1]_[_2]_from_[_3]_to_[_4]_has_been_successfully_processed_":"คำสั่งของท่านในการโอน [_1] [_2] จาก [_3] ไป [_4] ได้ดำเนินการสำเร็จแล้ว","Date_and_Time":"วันที่และเวลา","Browser":"เบราเซอร์","IP_Address":"ไอพีแอดเดรส","Status":"สถานะ","Successful":"เรียบร้อยแล้ว","Failed":"ล้มเหลว","Your_account_has_no_Login/Logout_activity_":"บัญชีของท่านไม่มีประวัติ การเข้าใช้งานระบบ/การออกจากระบบ","logout":"ออกจากระบบ","Please_enter_a_number_between_[_1]_":"โปรดป้อนตัวเลขระหว่าง [_1]","[_1]_days_[_2]_hours_[_3]_minutes":"[_1] วัน [_2] ชั่วโมง [_3] นาที","Your_trading_statistics_since_[_1]_":"สถิติการซื้อขายของท่านตั้งแต่ [_1]","Unlock_Cashier":"ปลดล็อกแคชเชียร์","Your_cashier_is_locked_as_per_your_request_-_to_unlock_it,_please_enter_the_password_":"การรับ/ชำระเงินของท่านถูกล็อกตามความประสงค์ของท่าน - หากประสงค์ปลดล็อก โปรดป้อนรหัสผ่าน","An_additional_password_can_be_used_to_restrict_access_to_the_cashier_":"รหัสผ่านเพิ่มนี้สามารถใช้เพื่อเข้าถึงส่วนของแคชเชียร์","Update":"การปรับปรุง","Sorry,_you_have_entered_an_incorrect_cashier_password":"ขออภัยค่ะ ท่านป้อนรหัสผ่านแคชเชียร์ไม่ถูกต้อง","You_have_reached_the_withdrawal_limit_":"ท่านถอนเกินวงเงิน","Start_Time":"เวลาเริ่ม","Entry_Spot":"สปอตเริ่มต้น","Low_Barrier":"Barrier ต่ำ","High_Barrier":"Barrier สูง","Average":"ค่าเฉลี่ย","This_contract_won":"สัญญานี้ได้กำไร","This_contract_lost":"สัญญานี้ขาดทุน","Spot":"สปอต","Target":"เป้าหมาย","Equals":"เท่ากับ","Not":"ไม่","Description":"รายละเอียด","Credit/Debit":"เครดิต/เดบิต","Balance":"คงเหลือ","Purchase_Price":"ราคาซื้อ","Profit/Loss":"กำไร/ขาดทุน","Contract_Information":"ข้อมูลสัญญา","Contract_Result":"ผลลัพธ์ของสัญญา","Current":"ปัจจุบัน","Open":"เปิด","Closed":"ปิด","Contract_has_not_started_yet":"สัญญายังไม่เริ่ม","Spot_Time":"เวลาสปอต","Spot_Time_(GMT)":"เวลาสปอต (GMT)","Current_Time":"เวลาปัจจุบัน","Exit_Spot_Time":"เวลาที่สปอตสิ้นสุด","Exit_Spot":"สปอตสิ้นสุด","Indicative":"อินดิเคทีฟ","There_was_an_error":"มีความผิดพลาดเกิดขึ้น","Sell_at_market":"ขายที่ราคาตลาด","You_have_sold_this_contract_at_[_1]_[_2]":"ท่านได้ขายสัญญานี้ที่ [_1] [_2]","Your_transaction_reference_number_is_[_1]":"หมายเลขอ้างอิงของธุรกรรมของท่าน คือ [_1]","Tick_[_1]_is_the_highest_tick":"ช่วงราคา [_1] เป็นราคาสูงสุด","Tick_[_1]_is_not_the_highest_tick":"ช่วงราคา [_1] ไม่ใช่ราคาสูงสุด","Tick_[_1]_is_the_lowest_tick":"ช่วงราคา [_1] เป็นราคาต่ำสุด","Tick_[_1]_is_not_the_lowest_tick":"ช่วงราคา [_1] ไม่ใช่ราคาต่ำสุด","Note":"หมายเหตุ","Contract_will_be_sold_at_the_prevailing_market_price_when_the_request_is_received_by_our_servers__This_price_may_differ_from_the_indicated_price_":"สัญญาจะถูกจำหน่ายที่ราคาทั่วไปของตลาดเมื่อระบบซื้อขายได้รับการแจ้งความจำนง ราคานี้อาจจะแตกต่างจากราคาที่ระบุ","Contract_Type":"ประเภทของสัญญา","Remaining_Time":"เวลาที่เหลืออยู่","Barrier_Change":"ค่า Barrier เปลี่ยนแปลง","Audit":"ตรวจสอบ","Audit_Page":"หน้าตรวจสอบ","View_Chart":"ดูแผนภูมิ","Contract_Starts":"เริ่มต้นสัญญา","Contract_Ends":"สิ้นสุดสัญญา","Start_Time_and_Entry_Spot":"เวลาเริ่มต้นและสปอตเริ่มต้น","Exit_Time_and_Exit_Spot":"เวลาสิ้นสุดและจุดสิ้นสุด","You_can_close_this_window_without_interrupting_your_trade_":"ท่านสามารถปิดหน้าต่างนี้ได้โดยไม่ขัดจังหวะการซื้อขายของท่าน","Selected_Tick":"เลือก ช่วงราคา","Highest_Tick":"ราคาสูงสุด","Highest_Tick_Time":"เวลาของราคาสูงสุด","Lowest_Tick":"ราคาต่ำสุด","Lowest_Tick_Time":"เวลาของราคาต่ำสุด","Close_Time":"เวลาปิด","Please_select_a_value":"โปรดระบุค่า","You_have_not_granted_access_to_any_applications_":"ท่านไม่ได้รับอนุญาตให้เข้าใช้งานระบบใดๆ","Permissions":"สิทธิ์","Never":"ไม่เคย","Revoke_access":"การเพิกถอนการเข้าถึง","Are_you_sure_that_you_want_to_permanently_revoke_access_to_the_application":"ท่านแน่ใจใช่ไหมที่จะยกเลิกการเข้าใช้ระบบถาวร","Transaction_performed_by_[_1]_(App_ID:_[_2])":"ดำเนินธุรกรรมโดย [_1] (App ID: [_2])","Admin":"แอดมิน","Read":"อ่าน","Payments":"การชำระเงิน","[_1]_Please_click_the_link_below_to_restart_the_password_recovery_process_":"[_1] โปรดคลิกลิงก์ด้านล่างเพื่อเริ่มต้นกระบวนการกู้คืนรหัสผ่าน","Your_password_has_been_successfully_reset__Please_log_into_your_account_using_your_new_password_":"รหัสผ่านของท่านได้ถูกกำหนดใหม่เรียบร้อยแล้ว โปรดเข้าสู่ระบบโดยการใช้รหัสผ่านใหม่ของท่าน","Please_check_your_email_for_the_password_reset_link_":"โปรดตรวจสอบอีเมล์ของท่านสำหรับลิงค์การตั้งค่ารหัสผ่านใหม่","details":"รายละเอียด","Withdraw":"ถอนเงิน","Insufficient_balance_":"ยอดคงเหลือไม่เพียงพอ","This_is_a_staging_server_-_For_testing_purposes_only":"นี่คือ เครื่องแม่ข่ายสำหรับพักงานระหว่างพัฒนาระบบ ซึ่งใช้เพื่อในการทดสอบเท่านั้น","The_server_<a_href=\"[_1]\">endpoint</a>_is:_[_2]":"เซิร์ฟเวอร์ <a href=\"[_1]\">จุดสิ้นสุด</a> คือ: [_2]","Sorry,_account_signup_is_not_available_in_your_country_":"ขออภัย ไม่สามารถเปิดบัญชีในประเทศของท่าน","There_was_a_problem_accessing_the_server_":"มีปัญหาในการเข้าถึงเครื่องแม่ข่าย","There_was_a_problem_accessing_the_server_during_purchase_":"มีปัญหาเกิดขึ้นในการเข้าถึงเซิร์ฟเวอร์ขณะส่งคำสั่งซื้อ","Should_be_a_valid_number_":"ควรเป็นตัวเลขที่ถูกต้อง","Should_be_more_than_[_1]":"ควรมีค่ามากกว่า [_1]","Should_be_less_than_[_1]":"ควรมีค่าน้อยกว่า [_1]","Should_be_[_1]":"ควรเป็น [_1]","Should_be_between_[_1]_and_[_2]":"ต้องมีค่าระหว่าง [_1] และ [_2]","Only_letters,_numbers,_space,_hyphen,_period,_and_apostrophe_are_allowed_":"ตัวอักษร ตัวเลข ช่องว่าง ขีดกลาง จุด และ เครื่องหมายอัญประกาศ ( ' ) เท่านั้น ที่สามารถใช้ได้","Only_letters,_space,_hyphen,_period,_and_apostrophe_are_allowed_":"ตัวอักษร ช่องว่าง ขีดกลาง จุด และ เครื่องหมายอัญประกาศ ( ' ) เท่านั้น ที่สามารถใช้ได้","Only_letters,_numbers,_and_hyphen_are_allowed_":"ตัวอักษร ตัวเลข และเครื่องหมายขีดกลางเท่านั้นที่อนุญาต","Only_numbers,_space,_and_hyphen_are_allowed_":"ตัวเลข ช่องว่าง และเครื่องหมายขีดกลางเท่านั้นที่อนุญาต","Only_numbers_and_spaces_are_allowed_":"ตัวเลข และช่องว่างเท่านั้นที่อนุญาต","Only_letters,_numbers,_space,_and_these_special_characters_are_allowed:_-___'_#_;_:_(_)_,_@_/":"เฉพาะตัวอักษร ตัวเลข ช่องว่าง และอักขระพิเศษเหล่านี้เท่านั้น - ' # ; : ( ) , @ /","The_two_passwords_that_you_entered_do_not_match_":"รหัสผ่านที่ท่านป้อนสองครั้งไม่เหมือนกัน","[_1]_and_[_2]_cannot_be_the_same_":"[_1] และ [_2] ไม่สามารถเป็นค่าเดียวกัน","You_should_enter_[_1]_characters_":"ท่านควรป้อนข้อมูล [_1] อักขระ","Indicates_required_field":"ระบุฟิลด์ข้อมูลที่ต้องมีข้อมูล","Verification_code_is_wrong__Please_use_the_link_sent_to_your_email_":"รหัสยืนยันไม่ถูกต้อง โปรดใช้ลิงค์ที่ส่งไปยังอีเมล์ของท่าน","The_password_you_entered_is_one_of_the_world's_most_commonly_used_passwords__You_should_not_be_using_this_password_":"รหัสผ่านที่ท่านใส่เป็นหนึ่งในรหัสผ่านที่พบบ่อยที่สุดในโลก เพื่อความปลอดภัย ท่านควรไม่จะใช้รหัสผ่านนี้","Hint:_it_would_take_approximately_[_1][_2]_to_crack_this_password_":"คำแนะนำ: จะใช้เวลาประมาณ [_1][_2] เพื่อเจาะรหัสผ่านนี้","thousand":"พัน","million":"ล้าน","Should_start_with_letter_or_number,_and_may_contain_hyphen_and_underscore_":"ควรเริ่มต้นด้วยอักษร หรือ ตัวเลข และอาจประกอบด้วยเครื่องหมายขีดกลาง และขีดล่าง","Your_address_could_not_be_verified_by_our_automated_system__You_may_proceed_but_please_ensure_that_your_address_is_complete_":"ระบบอัตโนมัติของเราไม่สามารถตรวจสอบที่อยู่ของท่านได้ โปรดแน่ใจว่า ที่อยู่ของท่านมีรายละเอียดครบถ้วนสมบูรณ์","Validate_address":"ตรวจสอบที่อยู่","Congratulations!_Your_[_1]_Account_has_been_created_":"ขอแสดงความยินดี! บัญชีของท่าน [_1] ได้ถูกสร้างเรียบร้อยแล้ว","The_[_1]_password_of_account_number_[_2]_has_been_changed_":"[_1]รหัสผ่านของเลขที่บัญชี [_2] ได้มีการเปลี่ยนแปลงเรียบร้อยแล้ว","[_1]_deposit_from_[_2]_to_account_number_[_3]_is_done__Transaction_ID:_[_4]":"[_1] ได้ฝากเงินจาก [_2] ไปยังเลขที่บัญชี [_3] เรียบร้อยแล้ว หมายเลขอ้างอิงธุรกรรม: [_4]","[_1]_withdrawal_from_account_number_[_2]_to_[_3]_is_done__Transaction_ID:_[_4]":"[_1] ได้ถอนเงินจากเลขที่บัญชี [_2] ไปยัง [_3] เรียบร้อยแล้ว หมายเลขอ้างอิงธุรกรรม: [_4]","Your_cashier_is_locked_as_per_your_request_-_to_unlock_it,_please_click_<a_href=\"[_1]\">here</a>_":"การรับ/ชำระเงินของท่านถูกล็อก - หากประสงค์ปลดล็อก โปรดคลิก <a href=\"[_1]\">ที่นี่</a>","Your_cashier_is_locked_":"แคชเชียร์ของท่านถูกล็อก","You_have_insufficient_funds_in_your_Binary_account,_please_<a_href=\"[_1]\">add_funds</a>_":"เงินทุนของท่านในบัญชี Binary ไม่เพียงพอ โปรด <a href=\"[_1]\">ฝากเงิน</a>","Sorry,_this_feature_is_not_available_in_your_jurisdiction_":"ขออภัย ฟังก์ชันนี้ไม่พร้อมใช้งานในพื้นที่ของท่าน","You_have_reached_the_limit_":"เกินวงเงินของท่าน","Main_password":"รหัสผ่านหลัก","Investor_password":"รหัสผ่านของผู้ลงทุน","Current_password":"รหัสผ่านปัจจุบัน","New_password":"รหัสผ่านใหม่","Demo_Standard":"การสาธิตตามมาตรฐาน","Standard":"มาตรฐาน","Demo_Advanced":"การสาธิตขั้นสูง","Advanced":"ขั้นสูง","Demo_Volatility_Indices":"จำลองดัชนีความผันผวน","Real_Standard":"มาตรฐานจริง","Real_Advanced":"จริงขั้นสูง","Real_Volatility_Indices":"ดัชนีผันผวนจริง","MAM_Advanced":"MAM ขั้นสูง","MAM_Volatility_Indices":"ดัชนีความผันผวน MAM","Change_Password":"เปลี่ยนรหัสผ่าน","Demo_Accounts":"บัญชีทดลองใช้","Demo_Account":"บัญชีทดลองใช้","Real-Money_Accounts":"บัญชีเงินจริง","Real-Money_Account":"บัญชีเงินจริง","MAM_Accounts":"บัญชี MAM","Our_MT5_service_is_currently_unavailable_to_EU_residents_due_to_pending_regulatory_approval_":"เรายังไม่เปิด บริการ MT5 สำหรับผู้ที่อยู่อาศัยในสหภาพยุโรป เนื่องจากอยู่ในระหว่างการขออนุมัติจากเจ้าหน้าที่ภาครัฐที่เกี่ยวข้อง","[_1]_Account_[_2]":"[_1] บัญชี [_2]","Trading_Contracts_for_Difference_(CFDs)_on_Volatility_Indices_may_not_be_suitable_for_everyone__Please_ensure_that_you_fully_understand_the_risks_involved,_including_the_possibility_of_losing_all_the_funds_in_your_MT5_account__Gambling_can_be_addictive_–_please_play_responsibly_":"ซื้อขายสัญญาส่วนต่าง (CFDs) ดัชนีผันผวนอาจะไม่เหมาะสมสำหรับทุกคน โปรดแน่ใจว่า ท่านเข้าใจถึงความเสี่ยงที่เกี่ยวข้องอย่างแท้จริง รวมถึงความเป็นไปได้ที่จะสูญเสียเงินทุนในบัญชี MT5 ของท่าน การพนันสามารถเสพติดได้ กรุณามีความรับผิดชอบในการดำเนินธุรกรรมซื้อขาย","Do_you_wish_to_continue?":"ท่านต้องการดำเนินการต่อหรือไม่?","for_account_[_1]":"สำหรับบัญชี [_1]","Verify_Reset_Password":"ตรวจสอบรหัสผ่านใหม่","Reset_Password":"ตั้งรหัสผ่านใหม่","Please_check_your_email_for_further_instructions_":"โปรดตรวจสอบอีเมล์ของท่านเพื่อติดตามการแนะนำวิธีการใช้งานขั้นต่อไป","Revoke_MAM":"ยกเลิก MAM","Manager_successfully_revoked":"ได้เพิกถอนผู้จัดการเรียบร้อยแล้ว","Min":"ค่าต่ำสุด","Max":"ค่าสูงสุด","Current_balance":"ยอดคงเหลือ","Withdrawal_limit":"วงเงินในการถอน","[_1]Authenticate_your_account[_2]_now_to_take_full_advantage_of_all_payment_methods_available_":"[_1]ยืนยันบัญชีของท่าน[_2]เดี๋ยวนี้ เพื่อใช้ประโยชน์จากวิธีการชำระเงินที่มีทั้งหมด","Please_set_the_[_1]currency[_2]_of_your_account_":"โปรดตั้งค่า [_1]สกุลเงิน[_2] ของบัญชีของท่าน","Please_set_your_30-day_turnover_limit_in_our_[_1]self-exclusion_facilities[_2]_to_remove_deposit_limits_":"โปรดตั้งค่าวงเงินการซื้อขาย 30 วันของท่านจาก [_1]ตัวเลือกพักการซื้อขาย[_2] เพื่อลบวงเงินการฝากเงิน","Please_set_[_1]country_of_residence[_2]_before_upgrading_to_a_real-money_account_":"โปรดตั้งค่า [_1]ประเทศที่พำนัก[_2] ก่อนอัพเกรดเป็นบัญชีจริง","Please_complete_the_[_1]financial_assessment_form[_2]_to_lift_your_withdrawal_and_trading_limits_":"โปรดบันทึกผล [_1]แบบฟอร์มการประเมินทางการเงิน[_2] เพื่อเพิ่มวงเงินการซื้อขายและการถอนเงินของท่าน","Please_[_1]complete_your_account_profile[_2]_to_lift_your_withdrawal_and_trading_limits_":"โปรด [_1]ปรับปรุงประวัติของท่าน[_2] เพื่อเพิ่มวงเงินการซื้อขายและการถอนเงินของท่าน","Please_[_1]accept_the_updated_Terms_and_Conditions[_2]_to_lift_your_withdrawal_and_trading_limits_":"โปรด [_1]ยอมรับข้อตกลงและเงื่อนไข[_2] เพื่อเพิ่มวงเงินการซื้อขายและการถอนเงินของท่าน","Your_account_is_restricted__Kindly_[_1]contact_customer_support[_2]_for_assistance_":"บัญชีของท่านถูกระงับ โปรด [_1]ติดต่อฝ่ายลูกค้าสัมพันธ์[_2] เพื่อดำเนินการต่อไป","Connection_error:_Please_check_your_internet_connection_":"การเชื่อมต่อมีความผิดพลาด: โปรดตรวจสอบการเชื่อมต่ออินเทอร์เน็ตของท่าน","You_have_reached_the_rate_limit_of_requests_per_second__Please_try_later_":"ท่านได้ใช้อัตราการส่งคำสั่งต่อวินาทีเกินที่กำหนด โปรดลองใหม่ภายหลัง","[_1]_requires_your_browser's_web_storage_to_be_enabled_in_order_to_function_properly__Please_enable_it_or_exit_private_browsing_mode_":"[_1] กำหนดให้เปิดใช้งานที่จัดเก็บข้อมูลบนเว็บของเบราเซอร์ของท่าน เพื่อที่จะได้ทำงานได้อย่างถูกต้อง โปรดเปิดการใช้งาน หรือ ออกจากโหมดส่วนตัว","We_are_reviewing_your_documents__For_more_details_[_1]contact_us[_2]_":"เรากำลังตรวจสอบเอกสารของท่าน สำหรับรายละเอียดเพิ่มเติม โปรดติดต่อ [_1]ติดต่อเรา[_2]","Deposits_and_withdrawals_have_been_disabled_on_your_account__Please_check_your_email_for_more_details_":"ได้มีการปิดการใช้งานการฝากและถอนเงินในบัญชีของท่าน โปรดตรวจสอบอีเมล์เพื่อศึกษารายละเอียดเพิ่มเติม","Trading_and_deposits_have_been_disabled_on_your_account__Kindly_[_1]contact_customer_support[_2]_for_assistance_":"ได้มีการปิดการใช้งานในการซื้อขายและฝากเงินในบัญชีของท่าน โปรด[_1]ติดฝ่ายบริการลูกค้า[_2]เพื่อรับความช่วยเหลือ","Withdrawals_have_been_disabled_on_your_account__Please_check_your_email_for_more_details_":"ได้มีการปิดการใช้งานการถอนเงินในบัญชีของท่าน กรุณาตรวจสอบอีเมล์เพื่อศึกษารายละเอียดเพิ่มเติม","Please_complete_your_[_1]personal_details[_2]_before_you_proceed_":"โปรดกรอก [_1]รายละเอียดส่วนบุคคลของท่าน[_2] ก่อนที่จะดำเนินการต่อ","Account_Authenticated":"บัญชีได้รับการยืนยันแล้ว","Your_web_browser_([_1])_is_out_of_date_and_may_affect_your_trading_experience__Proceed_at_your_own_risk__[_2]Update_browser[_3]":"เว็บเบราเซอร์ของท่าน ([_1]) ไม่ได้ปรับปรุงให้ทันสมัย ซึ่งส่งผลต่อการใช้งานในการซื้อขายของท่าน โปรดดำเนินการเพื่อแก้ไขความเสี่ยงนี้โดยตัวท่านเองสามารถ [_2] ปรับปรุงเบราเซอร์ให้เหมาะกับการใช้งาน [_3]","Bid":"ประมูล","Closed_Bid":"ปิดการประมูล","Create":"สร้าง","Commodities":"สินค้าโภคภัณฑ์","Indices":"ดัชนี","Stocks":"หลักทรัพย์","Volatility_Indices":"ดัชนีความผันผวน","Set_Currency":"ตั้งค่าสกุลเงิน","Please_choose_a_currency":"โปรดเลือกสกุลเงิน","Create_Account":"สร้างบัญชี","Accounts_List":"รายการบัญชี","[_1]_Account":"[_1] บัญชี","Investment":"การลงทุน","Gaming":"การพนัน","Virtual":"เสมือน","Real":"จริง","Counterparty":"คู่สัญญา","This_account_is_disabled":"บัญชีนี้ถูกปิดใช้งาน","This_account_is_excluded_until_[_1]":"บัญชีนี้จะถูกพักการใช้งาน จนกระทั่ง [_1]","Bitcoin":"บิทคอยน์","Bitcoin_Cash":"เงินสดบิทคอยน์","Ether":"อีเธอร์","Ether_Classic":"อีเธอร์คลาสสิก","Litecoin":"ไลท์คอยน์","Invalid_document_format_":"รูปแบบเอกสารไม่ถูกต้อง","File_([_1])_size_exceeds_the_permitted_limit__Maximum_allowed_file_size:_[_2]":"ขนาดไฟล์ ([_1]) เกินกว่าที่อนุญาต ขนาดไฟล์ใหญ่สุดที่อนุญาต: [_2]","ID_number_is_required_for_[_1]_":"เลขบัตรประชาชนจำเป็นสำหรับ [_1]","Only_letters,_numbers,_space,_underscore,_and_hyphen_are_allowed_for_ID_number_([_1])_":"เฉพาะตัวอักษร ตัวเลข เว้นวรรค ขีดล่าง และขีดกลางเท่านั้นที่อนุญาตให้ใช้ได้สำหรับหมายเลขประจำตัว ([_1])","Expiry_date_is_required_for_[_1]_":"วันหมดอายุจำเป็นสำหรับ [_1]","Passport":"หนังสือเดินทาง","ID_card":"บัตรประจำตัวประชาชน","Driving_licence":"ใบขับขี่","Front_Side":"ด้านหน้า","Reverse_Side":"อีกด้านหนึ่ง","Front_and_reverse_side_photos_of_[_1]_are_required_":"ต้องใช้ภาพถ่ายด้านหน้าและภาพกลับด้านของ [_1]","[_1]Your_Proof_of_Identity_or_Proof_of_Address[_2]_did_not_meet_our_requirements__Please_check_your_email_for_further_instructions_":"[_1]หลักฐานแสดงตัวบุคคล หรือ หลักฐานที่อยู่ของท่าน[_2] ไม่เป็นไปตามข้อกำหนดของเรา โปรดตรวจสอบอีเมล์ของท่านสำหรับคำแนะนำเพิ่มเติม","Following_file(s)_were_already_uploaded:_[_1]":"ได้มีการอัพโหลดไฟล์ดังต่อไปนี้แล้ว: [_1]","Checking":"กำลังตรวจสอบ","Checked":"ตรวจสอบแล้ว","Pending":"ค้างอยู่","Submitting":"กำลังส่ง","Submitted":"ส่งแล้ว","You_will_be_redirected_to_a_third-party_website_which_is_not_owned_by_Binary_com_":"ท่านกำลังจะเปลี่ยนเส้นทางไปยังเว็บไซต์อื่นซึ่งไม่ใช่เป็นของ Binary.com","Click_OK_to_proceed_":"คลิก OK เพื่อดำเนินการต่อไป","You_have_successfully_enabled_two-factor_authentication_for_your_account_":"ระบบได้เปิดการใช้งานการรับรองโดยใช้ 2 ตัวแปรผูกกับบัญชีของท่านเรียบร้อยแล้ว","You_have_successfully_disabled_two-factor_authentication_for_your_account_":"ระบบได้ปิดการใช้งานการรับรองโดยใช้ 2 ตัวแปรผูกกับบัญชีของท่านเรียบร้อยแล้ว","Enable":"เปิดใช้งาน","Disable":"ปิดใช้งาน"};