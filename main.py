# !/usr/bin/python
# -*-coding:utf-8 -*-

s_default = """
            感謝您應徵本行測試規劃人員，請於4月17日(星期三)，依下列時間前來本行資訊總管理處參加甄試，謝謝！	
            日期:2019.4.17	
            時間:9:00	
            地點：台北市內湖區瑞光路510號	
            聯絡人:李芝慧	
            電話：(02)8793-6999#3065	
            考試內容:	
            邏輯、英文、程式設計(Java、.net、cobol可任選)	
            請攜帶：	
            1.畢業證書正本及影本	
            2.應屆畢業請提供成績單	
            3. 2吋照片1張	
            4.請準備去年度扣繳憑單影本及最近一次的薪資單(可於複試前提供)	
            5.請先完成本行網站(https://recruit.cathaybk.com.tw/CathaybkHR/servlet/HttpDispatcher/EZA0_0000/index)進行線上履歷登錄並投遞職缺	
            聯絡窗口：李小姐

            聯絡電話：87936999*3065
        """


class Parser:
    s_list = []
    information = {
        'date':'', 'time':'',
        'phone':'', 'address':'',
        'email':''
    }

    def __init__(self, s = s_default):
        set_s(s)

    def __parse(self):
        for line in self.s_list:
            if ('路' in line and '號' in line):
                information['address'] = line
            elif ('@' in line):
                information['email'] = line

    def set_s(self, s):
        self.s_list = s.split('\n')
        self.__parse()

if __name__ == '__main__':
    p = Parser()
    print(p.get_date_time())