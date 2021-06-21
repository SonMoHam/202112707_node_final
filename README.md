# 202112707_node_final

## Table
### Countries
 - id
 - alpha2Code   
 - alpha3Code
 - numericCode 
 - nameKR      
 - nameEN     
 - createdAt
 - updatedAt
 - 데이터 예시

![country data](https://user-images.githubusercontent.com/73145656/122716676-85bb1800-d2a5-11eb-8cba-633afaea38aa.PNG)


### Subdivisions 
 - id
 - code
 - nameKR
 - nameEN
 - createdAt
 - updatedAt
 - 데이터 예시

![subdivisiondata](https://user-images.githubusercontent.com/73145656/122716683-881d7200-d2a5-11eb-8356-30c742912f29.PNG)

---
## 메소드
- Method URL
- Get /country
- Get /country/:alpha2_code
- Post /country
- Put /country
- Delete /country
- Get /subdivision
- Post /subdivision
- Put /subdivision
- Delete /subdivision
### Get /country 
#### 업무 - 국가 목록 보기
#### 응답 - JSON
- msg - 성공/실패 메시지
- data
- 예시

![image](https://user-images.githubusercontent.com/73145656/122719576-53131e80-d2a9-11eb-8053-4b5a527db03e.png)
#
### Get /country/:alpha2_code
#### 업무 - alpha2_code 에 해당하는 국가의 정보와 행정구역 보기
#### 응답 - JSON
- msg - 성공/실패 메시지
- data
- 예시

![image](https://user-images.githubusercontent.com/73145656/122720452-738fa880-d2aa-11eb-8f23-7adce3fc93d2.png)
#

### Post /country
#### 업무 - 국가 정보 등록
#### 요청 바디

![image](https://user-images.githubusercontent.com/73145656/122721191-56a7a500-d2ab-11eb-8604-927db5674e19.png)

#### 응답 - JSON
- msg - 성공/실패 메시지
#

### Put /country
#### 업무 - 전달 받은 id에 해당하는 국가 정보 수정
#### 요청 바디

![image](https://user-images.githubusercontent.com/73145656/122721773-02e98b80-d2ac-11eb-83fb-def96aac8442.png)
#### 응답 - JSON
- msg - 성공/실패 메시지
#

### Delete /country
#### 업무 - 전달 받은 id에 해당하는 국가 정보 삭제
#### 요청 바디
- id - Country 레코드 id
#### 응답 - JSON
- msg - 성공/실패 메시지
#

### Get /subdivision
#### 업무 - 등록된 행정구역 보기
#### 응답 - JSON
- msg - 성공/실패 메시지
- data
- 데이터 예시

![image](https://user-images.githubusercontent.com/73145656/122722658-f0238680-d2ac-11eb-8bc9-e21b7e685ce9.png)
#

### Post /subdivision
#### 업무 - 행정구역 등록
#### 요청 바디

![image](https://user-images.githubusercontent.com/73145656/122723014-67591a80-d2ad-11eb-88c7-05bc13956c37.png)
#### 응답 - JSON
- msg - 성공/실패 메시지
